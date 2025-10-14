# SEO/AEO Optimization Plan

**Portfolio Site - Matthew Kerns**
**Created:** 2025-10-14
**Status:** In Progress

---

## Executive Summary

This document outlines a comprehensive plan to optimize the portfolio site for both traditional Search Engine Optimization (SEO) and Answer Engine Optimization (AEO). With 25% of organic traffic predicted to move to AI chatbots by 2026, this plan ensures visibility across both traditional search engines and AI-powered answer engines like ChatGPT, Perplexity, and Microsoft Copilot.

---

## Current State Assessment

### ✅ Strengths
- Basic metadata structure (title, description, keywords)
- OpenGraph tags configured
- Robots meta properly set
- Google Analytics integrated
- Semantic HTML with proper landmarks
- Font optimization (Inter with swap/preload)
- Accessibility features (skip-to-content)

### ❌ Critical Gaps
1. **No structured data (Schema.org)** - Missing JSON-LD implementation
2. **No sitemap.xml** - Search engines can't efficiently discover pages
3. **No robots.txt** - Missing crawl directives for AI bots
4. **Generic site config** - Placeholder data instead of real information
5. **Missing canonical URLs** - No duplicate content prevention
6. **No FAQ sections** - Missing AEO-critical Q&A format
7. **Content not optimized for conversational queries**
8. **No breadcrumbs** - Missing navigation context

---

## What is Answer Engine Optimization (AEO)?

AEO is the practice of optimizing content so AI-powered platforms can directly provide answers to user queries. Unlike traditional SEO (which aims for high rankings in search results), AEO focuses on earning mentions, citations, and placements in conversational AI responses.

### Key Differences: SEO vs AEO

| Aspect | SEO | AEO |
|--------|-----|-----|
| **Goal** | Rank high in search results | Be cited in AI responses |
| **Format** | Links and snippets | Direct answers |
| **Platforms** | Google, Bing | ChatGPT, Perplexity, Copilot |
| **Content Style** | Keyword-optimized | Conversational, Q&A format |
| **Technical** | Meta tags, backlinks | Structured data, clarity |

### Why AEO Matters Now

- 60+ % of Millennials and Gen Z use AI engines in search routines
- 25% of organic traffic moving to AI chatbots by 2026
- AI bots need explicit permission to crawl (must allow GPTBot, etc.)
- Developer portfolios benefit from technical content visibility in AI tools

---

## Implementation Phases

## Phase 1: Foundation (High Priority) 🔴

**Timeline:** Week 1
**Impact:** High
**Effort:** Low

### 1.1 Update Site Configuration ✅

**File:** `lib/seo.ts`

**Changes:**
- Replace placeholder data with real information
- Add location, email, social links
- Optimize keywords for natural language queries
- Include specific technologies and expertise areas

**Keywords Strategy:**
- Primary: "Matthew Kerns software engineer"
- Location: "software engineer Irvine CA"
- Technical: "AWS cloud architect", "React TypeScript developer"
- Experience: "Amazon SDE", "AI automation LangGraph"

### 1.2 Add Sitemap Generation

**File:** `app/sitemap.ts` (new)

**Purpose:**
- Help search engines discover all pages
- Set update frequency and priority for each page
- Include dynamic project pages
- Auto-generate based on content

**Benefits:**
- Faster indexing of new content
- Better crawl budget utilization
- Clear site structure for bots

### 1.3 Add Robots.txt

**File:** `app/robots.ts` (new)

**Critical for AEO:**
Must explicitly allow AI crawlers:
- GPTBot (ChatGPT)
- OAI-SearchBot (OpenAI Search)
- PerplexityBot (Perplexity AI)
- Claude-Web (Claude - Anthropic)
- Bingbot (Microsoft Copilot)

**Also includes:**
- Disallow for API routes and build files
- Sitemap location reference

### 1.4 Add Canonical URLs

**File:** `app/layout.tsx` (update)

**Purpose:**
- Prevent duplicate content issues
- Signal preferred URL version to search engines
- Required for Next.js metadata base

---

## Phase 2: Structured Data (High Priority) 🔴

**Timeline:** Week 2
**Impact:** High
**Effort:** Medium

### 2.1 Implement JSON-LD Schema

**File:** `lib/schema.ts` (new)

**Schema Types:**

1. **Person Schema** (Homepage)
   - Name, contact, location
   - Job title and description
   - Work history (Amazon, Ascension AI, InfinityVault)
   - Skills and expertise (knowsAbout)
   - Social media profiles (sameAs)

2. **WebSite Schema** (Homepage)
   - Site name and description
   - Author information
   - URL structure

3. **SoftwareSourceCode Schema** (Projects)
   - Project name and description
   - Code repository link
   - Programming languages used
   - Author attribution
   - Demo URL (if available)

4. **BreadcrumbList Schema** (Navigation)
   - Page hierarchy
   - Navigation context
   - Better user experience signals

### 2.2 Schema Integration

**Implementation:**
- Add JSON-LD scripts to `<head>` via dangerouslySetInnerHTML
- Person + WebSite schemas on homepage
- Project schema on each project detail page
- Breadcrumb schema on all non-homepage pages

**Benefits:**
- Rich snippets in search results
- Knowledge graph eligibility
- Better AI understanding of content
- Improved click-through rates

---

## Phase 3: AEO Content Optimization (Medium Priority) 🟡

**Timeline:** Week 3
**Impact:** High (for AI visibility)
**Effort:** Medium

### 3.1 Add FAQ Section

**Component:** `components/FAQ.tsx` (new)

**Questions to Answer:**
- "What technologies does Matthew Kerns specialize in?"
- "How many years of experience does Matthew have?"
- "What kind of projects has Matthew built?"
- "Is Matthew available for hire?"
- "Where is Matthew located?"
- "What was Matthew's role at Amazon?"

**Schema:** FAQPage structured data

**Purpose:**
- Direct answers for AI engines
- Natural language query optimization
- Featured snippet opportunities
- Voice search optimization

### 3.2 Optimize Content for Conversational Queries

**Content Strategy:**

**Before (SEO-focused):**
```
"I'm a Senior Software Engineer with a passion for building..."
```

**After (AEO-optimized):**
```
"Matthew Kerns builds scalable AWS cloud systems and AI automation
for production environments. 7+ years experience at Amazon and startups
delivering high-quality, maintainable software."
```

**Key Principles:**
- Lead with value and answers
- Use natural language (how people talk)
- Answer "who, what, where, why, how"
- Include specific numbers and facts
- Use bullet points and clear headings

### 3.3 Content Formatting for AI

**Best Practices:**
- Clear H1, H2, H3 hierarchy
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Definition lists for key terms
- Tables for comparisons
- Bold important terms once

**Long-tail Keywords:**
- "What kind of software does Matthew Kerns build?"
- "Matthew Kerns AWS experience Amazon"
- "React TypeScript developer California"
- "AI automation engineer LangGraph"

---

## Phase 4: Technical SEO Enhancements (Medium Priority) 🟡

**Timeline:** Week 4
**Impact:** Medium
**Effort:** Low-Medium

### 4.1 Add Web Manifest (PWA)

**File:** `app/manifest.ts` (new)

**Benefits:**
- Progressive Web App capability
- Better mobile experience
- Home screen installation
- Offline functionality (future)

### 4.2 Optimize Social Media Cards

**Current:** Generic OG image
**Needed:** Custom branded image

**Specifications:**
- OpenGraph: 1200x630px
- Twitter Card: 1200x600px
- Include name, title, tech stack
- Professional headshot or branding

**Tools:** Canva, Figma, or custom design

### 4.3 Enhanced Page Metadata

**Each page should have:**

1. **Unique Title Tag**
   - Include page topic + name
   - 50-60 characters
   - Natural keyword inclusion

2. **Meta Description**
   - 140-160 characters
   - Include call-to-action
   - Answer "what's on this page?"

3. **Keywords**
   - 5-10 relevant terms
   - Mix of broad and specific
   - Include location if relevant

**Example (Projects Page):**
```typescript
title: "Software Engineering Projects | Matthew Kerns"
description: "Explore production-grade AWS, React, and AI projects built by Matthew Kerns. Spring Boot APIs, serverless architecture, and automation workflows."
```

---

## Phase 5: Performance & Crawlability (Low Priority) 🟢

**Timeline:** Week 5+
**Impact:** Medium (indirect)
**Effort:** Low

### 5.1 Performance Optimization

**Current Status:**
- ✅ Next.js Image optimization
- ✅ Font optimization (Inter)
- ✅ Code splitting

**Additional Improvements:**
- Resource hints (preconnect to external domains)
- Service worker for offline capability
- Lazy loading for below-fold content
- Optimize third-party scripts (GA)

**Targets:**
- Load time: < 2 seconds
- Lighthouse score: 90+ all categories
- Core Web Vitals: All green

### 5.2 Verify AI Bot Access

**Monitor in robots.txt logs:**
- GPTBot visits
- PerplexityBot visits
- Claude-Web visits
- Bingbot visits

**If blocked:**
- Check server configuration
- Verify robots.txt syntax
- Allow specific user agents

### 5.3 Add Breadcrumb Navigation

**Implementation:**
```
Home > Projects > Spring Boot Server
Home > About
```

**Benefits:**
- Better navigation context
- Breadcrumb schema for rich snippets
- Improved user experience
- Clearer site hierarchy for bots

---

## Priority Matrix

| Task | Impact | Effort | Phase | Status |
|------|--------|--------|-------|--------|
| Update site config | High | Low | 1 | 🔴 TODO |
| Add sitemap.xml | High | Low | 1 | 🔴 TODO |
| Add robots.txt with AI bots | High | Low | 1 | 🔴 TODO |
| Add canonical URLs | High | Low | 1 | 🔴 TODO |
| Person/Website schema | High | Medium | 2 | 🔴 TODO |
| Project schemas | High | Low | 2 | 🔴 TODO |
| Create FAQ section | High | Medium | 3 | 🟡 TODO |
| Optimize content for Q&A | High | Medium | 3 | 🟡 TODO |
| Add breadcrumbs | Medium | Low | 4 | 🟡 TODO |
| Create OG images | Medium | Medium | 4 | 🟡 TODO |
| Add manifest.json | Low | Low | 5 | 🟢 TODO |
| Performance tuning | Medium | Low | 5 | 🟢 TODO |

---

## Success Metrics

### SEO Metrics
- **Google Search Console**
  - Impressions growth (target: +50% in 3 months)
  - Click-through rate (target: >3%)
  - Average position (target: <20 for target keywords)
  - Indexed pages (target: 100% of public pages)

- **Organic Traffic**
  - Sessions from organic search
  - New users from search
  - Bounce rate (target: <60%)
  - Time on page (target: >2 min)

- **Keyword Rankings**
  - "Matthew Kerns software engineer" (target: page 1)
  - "software engineer Irvine CA" (target: page 2-3)
  - "AWS cloud architect California" (target: page 3-5)

### AEO Metrics
- **AI Engine Visibility**
  - ChatGPT citations when queried about "Matthew Kerns"
  - Perplexity AI mentions in relevant searches
  - Featured snippets (Google position zero)

- **Voice Search**
  - Voice query optimization
  - Natural language rankings
  - Question-based query visibility

### Technical Metrics
- **Lighthouse Scores**
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

- **Core Web Vitals**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

- **Structured Data**
  - Zero validation errors (Google Rich Results Test)
  - All schema types properly implemented
  - Enhanced search result appearance

---

## Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for errors
- Monitor keyword rankings
- Review GA4 traffic sources
- Test site with Lighthouse

### Monthly Tasks
- Update content with new projects
- Refresh meta descriptions
- Add new FAQ questions
- Review and update keywords

### Quarterly Tasks
- Comprehensive SEO audit
- Competitor analysis
- Backlink profile review
- Content gap analysis

---

## Tools & Resources

### Validation Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)

### SEO Tools
- Google Analytics 4
- Google Search Console
- Ahrefs / SEMrush (optional)
- Screaming Frog (site audit)

### AEO Testing
- Query your name in ChatGPT
- Search in Perplexity AI
- Test with voice assistants
- Monitor AI bot traffic in server logs

---

## Reference Documentation

### External Resources
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [AEO Comprehensive Guide (CXL)](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/)

### Internal Files
- `lib/seo.ts` - Site configuration
- `lib/schema.ts` - Structured data generators
- `app/sitemap.ts` - Sitemap generation
- `app/robots.ts` - Robots.txt configuration
- `app/manifest.ts` - PWA manifest

---

## Revision History

| Date | Author | Changes |
|------|--------|---------|
| 2025-10-14 | Claude Code | Initial plan creation |

---

## Next Steps

1. ✅ Document plan (this file)
2. 🔴 Implement Phase 1 (Foundation)
3. 🔴 Implement Phase 2 (Structured Data)
4. 🟡 Implement Phase 3 (Content Optimization)
5. 🟡 Implement Phase 4 (Technical Enhancements)
6. 🟢 Implement Phase 5 (Performance)
7. Monitor and iterate based on results
