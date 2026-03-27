# User Engagement System Migration Plan

## Overview

This document outlines the migration from the current static portfolio site to an interactive platform with user authentication and engagement features (comments, likes).

---

## Current State

- Static client-side JavaScript site
- No backend or database
- No user authentication
- Content defined in `data.js`
- DOM manipulation via `central.js` and `newelements.js`

---

## Target State

| User Type | Can View Posts | Can See Engagement | Can Comment | Can Like |
|-----------|----------------|-------------------|-------------|----------|
| Anonymous (public) | Yes | Blurred/hidden | No | No |
| Registered user | Yes | Yes | Yes | Yes |

---

## Architecture Decision

### Option A: Serverless (Firebase/Supabase)
- **Pros:** No server management, scales automatically, free tier available
- **Cons:** Vendor lock-in, less control

### Option B: Custom Backend (Node.js + PostgreSQL)
- **Pros:** Full control, portable, no vendor lock-in
- **Cons:** Requires hosting, more setup

### Option C: Hybrid (Static site + Serverless functions)
- **Pros:** Keep current deployment, add auth via service
- **Cons:** Split architecture

**Recommendation:** Option A (Firebase or Supabase) for fastest implementation with minimal infrastructure changes.

---

## Implementation Phases

### Phase 1: Backend Infrastructure

#### 1.1 Database Schema

```
users
├── id (uuid, primary key)
├── email (string, unique)
├── username (string, unique)
├── password_hash (string)
├── created_at (timestamp)
└── avatar_url (string, nullable)

posts
├── id (uuid, primary key)
├── slug (string, unique)
├── title (string)
├── created_at (timestamp)
└── content (text)

comments
├── id (uuid, primary key)
├── post_id (uuid, foreign key -> posts.id)
├── user_id (uuid, foreign key -> users.id)
├── content (text)
├── created_at (timestamp)
└── updated_at (timestamp)

likes
├── id (uuid, primary key)
├── post_id (uuid, foreign key -> posts.id)
├── user_id (uuid, foreign key -> users.id)
├── created_at (timestamp)
└── UNIQUE(post_id, user_id)
```

#### 1.2 Authentication Setup

- Email/password registration
- Email verification (optional but recommended)
- Password reset flow
- Session management (JWT or session cookies)

---

### Phase 2: API Endpoints

#### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Create new user account |
| POST | `/auth/login` | Authenticate user |
| POST | `/auth/logout` | End session |
| POST | `/auth/forgot-password` | Request password reset |
| POST | `/auth/reset-password` | Reset password with token |

#### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/me` | Get current user profile |
| PATCH | `/users/me` | Update profile |

#### Engagement
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts/:id/comments` | Get comments for post |
| POST | `/posts/:id/comments` | Add comment (auth required) |
| DELETE | `/comments/:id` | Delete own comment (auth required) |
| POST | `/posts/:id/like` | Like a post (auth required) |
| DELETE | `/posts/:id/like` | Remove like (auth required) |
| GET | `/posts/:id/likes/count` | Get like count |

---

### Phase 3: Frontend Changes

#### 3.1 New Files Required

```
candidate/
├── js/
│   ├── auth.js          # Authentication logic
│   ├── api.js           # API client
│   ├── comments.js      # Comment UI components
│   ├── likes.js         # Like button logic
│   └── blur.js          # Blur effect for anonymous users
├── css/
│   └── _engagement.scss # Styles for comments, likes, blur
└── components/
    ├── login-modal.html
    ├── register-modal.html
    └── comment-section.html
```

#### 3.2 Authentication UI

- Login/Register modal triggered from header
- User dropdown menu when logged in (profile, logout)
- Persistent session via localStorage/cookies

#### 3.3 Engagement Components

**Comment Section (per blog post):**
```
┌─────────────────────────────────────┐
│ Comments (3)                        │
├─────────────────────────────────────┤
│ [Avatar] Username · 2 hours ago     │
│ Comment text here...                │
├─────────────────────────────────────┤
│ [Avatar] Username · 1 day ago       │
│ Comment text here...                │
├─────────────────────────────────────┤
│ [Text input: Add a comment...]      │
│                          [Submit]   │
└─────────────────────────────────────┘
```

**Like Button:**
```
[♡ 24 likes]  →  [♥ 25 likes] (after click)
```

#### 3.4 Blur Effect for Anonymous Users

CSS blur filter on engagement elements:
```css
.engagement-blurred {
    filter: blur(8px);
    pointer-events: none;
    user-select: none;
    position: relative;
}

.engagement-blurred::after {
    content: "Sign up to see comments";
    /* overlay styling */
}
```

---

### Phase 4: Security Considerations

#### Input Validation
- Sanitize all user inputs (prevent XSS)
- Validate email format
- Enforce password strength (min 8 chars, mixed case, number)
- Rate limit auth endpoints

#### Data Protection
- Hash passwords with bcrypt (cost factor 12+)
- Use HTTPS only
- Implement CSRF protection
- Set secure cookie flags

#### Authorization
- Users can only edit/delete their own comments
- Validate user ownership on all mutations
- Use parameterized queries (prevent SQL injection)

---

### Phase 5: Migration Steps

#### Step 1: Set Up Backend
1. Create Firebase/Supabase project (or provision server)
2. Configure authentication providers
3. Create database tables
4. Deploy API endpoints
5. Test with Postman/curl

#### Step 2: Migrate Post Data
1. Export `blog_total` from `data.js` to database
2. Assign unique IDs to each post
3. Update frontend to fetch posts from API (or keep static with engagement overlay)

#### Step 3: Implement Auth UI
1. Create login/register modals
2. Add auth state management
3. Update header to show user status
4. Test registration and login flows

#### Step 4: Add Engagement Features
1. Implement comment component
2. Add like button to blog posts
3. Connect to API endpoints
4. Add blur effect for anonymous users

#### Step 5: Testing
1. Test anonymous user experience
2. Test registered user flows
3. Test edge cases (empty comments, rapid likes, etc.)
4. Cross-browser testing

---

## File Changes Summary

| File | Changes |
|------|---------|
| `central.js` | Add hooks for engagement components |
| `newelements.js` | Add auth state checks before displaying engagement |
| `data.js` | Add post IDs to map to database records |
| `index.html` | Add login/register modal containers, script imports |

---

## Estimated Complexity

| Phase | Complexity |
|-------|-----------|
| Phase 1: Backend Infrastructure | Medium |
| Phase 2: API Endpoints | Medium |
| Phase 3: Frontend Changes | High |
| Phase 4: Security | Medium |
| Phase 5: Migration | Low |

---

## Open Questions

1. **Moderation:** Should there be admin tools to moderate comments?
2. **Notifications:** Should users be notified of replies to their comments?
3. **Social login:** Support Google/GitHub OAuth in addition to email?
4. **Existing content:** Should current blog posts be migrated to database or remain static?
5. **Hosting:** Where will the backend be hosted?

---

## Next Steps

1. Decide on backend approach (Firebase vs Supabase vs custom)
2. Set up development environment
3. Create database schema
4. Begin Phase 1 implementation
