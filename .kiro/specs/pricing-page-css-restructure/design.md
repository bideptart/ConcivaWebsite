# Design Document: Pricing Page CSS Restructure

## Introduction

This design outlines the complete restructuring of pricing.css to align with the component architecture, implementing the missing pc-* and cmp-* class systems while removing unused CSS blocks. The solution creates a maintainable, responsive CSS architecture that supports the existing React components.

## Architecture Overview

### Current State Analysis
- **PricingCards.jsx** expects pc-* classes (pc-section, pc-card, pc-price-num, etc.)
- **PricingComparison.jsx** expects cmp-* classes (cmp-section, cmp-table, cmp-check, etc.)
- **BillingToggle.jsx** uses existing billing-* classes (partially implemented)
- **pricing.css** contains ~1800 lines with many unused blocks (reveal-*, trust-strip*, etc.)

### Target Architecture
```
pricing.css (restructured)
├── Design Tokens & Variables
├── PC System (Pricing Cards)
│   ├── pc-section (layout container)
│   ├── pc-card (individual card styling)
│   ├── pc-price-* (pricing display elements)
│   └── pc-cta (call-to-action buttons)
├── CMP System (Comparison Table)
│   ├── cmp-section (table container)
│   ├── cmp-table (table styling)
│   ├── cmp-check (checkmark icons)
│   └── cmp-highlight (featured content)
├── Shared Components
│   ├── section-header (reusable headers)
│   ├── gradient-text (accent styling)
│   └── responsive utilities
└── Legacy Cleanup
    └── Remove unused CSS blocks
```

## Component Design

### PC System (Pricing Cards)

**Container Structure**
```css
.pc-section {
  /* Main container for pricing cards section */
  padding: 40px 0;
  max-width: 880px;
  margin: 0 auto;
}

.pc-grid {
  /* CSS Grid layout for cards */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: stretch;
}
```

**Card Architecture**
```css
.pc-card {
  /* Base card styling */
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.pc-card--featured {
  /* Featured card with gradient border */
  border: 2px solid transparent;
  background: linear-gradient(var(--color-surface-base), var(--color-surface-base)) padding-box,
              linear-gradient(160deg, var(--color-accent), var(--color-accent-strong)) border-box;
}
```

**Pricing Display Elements**
```css
.pc-price-row {
  /* Container for price display */
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin: 16px 0;
}

.pc-price-wrap {
  /* Animation container for price changes */
  display: inline-block;
  overflow: hidden;
  line-height: 1;
}

.pc-price-num {
  /* Animated price number */
  font-size: 3.25rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1;
  color: #0f172a;
}
```

### CMP System (Comparison Table)

**Table Structure**
```css
.cmp-section {
  /* Table section container */
  padding: var(--space-8) 0;
}

.cmp-table {
  /* Comparison table base */
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-md);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
}

.cmp-th {
  /* Table header cells */
  padding: 1rem 1.25rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  border-bottom: 2px solid var(--color-border-default);
  text-align: center;
}

.cmp-th--featured {
  /* Featured column header */
  background: var(--color-comparison-header);
  color: var(--color-accent-strong);
}
```

**Interactive Elements**
```css
.cmp-row {
  /* Table row base */
  transition: background 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.cmp-row--hovered {
  /* JavaScript-driven hover state */
  background: #f8fafc;
}

.cmp-check {
  /* Checkmark icon styling */
  color: var(--color-success);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## Responsive Design

### Breakpoint Strategy
```css
/* Mobile First Approach */
@media (max-width: 740px) {
  .pc-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .cmp-table {
    min-width: 560px; /* horizontal scroll */
  }
}

@media (min-width: 741px) and (max-width: 960px) {
  .pc-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}
```

## Animation & Interaction Design

### Price Animation System
```javascript
// Framer Motion integration for price changes
<AnimatePresence mode="popLayout">
  <motion.span
    key={value}
    className="pc-price-num"
    initial={{ y: 16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -16, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 340, damping: 30 }}
  >
    {value}
  </motion.span>
</AnimatePresence>
```

### Hover State Management
```javascript
// JavaScript-driven hover for comparison table
const [hovered, setHovered] = useState(null);

<tr
  className={`cmp-row${hovered === i ? ' cmp-row--hovered' : ''}`}
  onMouseEnter={() => setHovered(i)}
  onMouseLeave={() => setHovered(null)}
>
```

## CSS Cleanup Strategy

### Blocks to Remove
```css
/* Remove these unused sections */
- .reveal-* (scroll reveal animations - unused)
- .trust-strip* (old trust indicators)  
- .enterprise-row* (deprecated enterprise section)
- .stat-counter-* (unused stat counters)
- .ml-* (old more links system)
- .pf-* (old footer system - already has replacement)
```

### Blocks to Preserve
```css
/* Keep these active sections */
- Design token variables (--color-*, --space-*, etc.)
- .section-header, .gradient-text (shared components)
- .billing-* (used by BillingToggle)
- .pricing-hero (used by PricingHero)
- .faq-* (used by PricingFAQ)
- .pricing-cta-* (used by PricingCTA)
```

## Design Token Integration

### Color System
```css
:root {
  --color-accent: #f97316;
  --color-accent-strong: #ea580c;
  --color-surface-base: #ffffff;
  --color-text-primary: #0f172a;
  --color-border-default: #e2e8f0;
  --color-success: #22c55e;
}
```

### Spacing System
```css
:root {
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --radius-md: 12px;
  --radius-pill: 9999px;
}
```

## Implementation Strategy

### Phase 1: CSS Class Implementation
1. Create PC system classes in pricing.css
2. Create CMP system classes in pricing.css
3. Ensure design token usage throughout

### Phase 2: Legacy Cleanup
1. Identify unused CSS blocks via component analysis
2. Remove dead code sections
3. Optimize file structure and organization

### Phase 3: Integration Testing
1. Test all pricing components render correctly
2. Verify responsive behavior across breakpoints
3. Test interactive states (hover, featured, animations)

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: PC Class Coverage

*For any* pricing card configuration, all pc-* classes used by the component should have corresponding CSS definitions that render the card with proper styling

**Validates: Requirements 1.1**

### Property 2: Featured Card Visual Distinction

*For any* pricing card marked as featured, it should render with visually distinct styling compared to non-featured cards

**Validates: Requirements 1.2**

### Property 3: Price Animation Smoothness

*For any* valid price transition, the animation should complete smoothly without visual artifacts or interruption

**Validates: Requirements 1.3**

### Property 4: Billing Toggle Response

*For any* billing cycle change (monthly/annual), all pricing displays should update to show the correct values

**Validates: Requirements 1.4**

### Property 5: Responsive Card Layout

*For any* viewport width within supported ranges, the pricing card layout should remain functional and visually appropriate

**Validates: Requirements 1.5**

### Property 6: CMP Class Coverage

*For any* comparison table data, all cmp-* classes used by the component should have corresponding CSS definitions that render the table properly

**Validates: Requirements 2.1**

### Property 7: Table Row Hover Feedback

*For any* comparison table row, hovering should provide consistent visual feedback through the cmp-row--hovered state

**Validates: Requirements 2.2**

### Property 8: Featured Column Distinction

*For any* column marked as featured, it should be visually distinct from non-featured columns through cmp-th--featured styling

**Validates: Requirements 2.3**

### Property 9: Table Responsive Readability

*For any* screen size within supported ranges, the comparison table should remain readable and navigable

**Validates: Requirements 2.4**

### Property 10: Consistent Cell Styling

*For any* table cell content type (checkmarks, text, numbers), the styling should follow consistent patterns defined by cmp-* classes

**Validates: Requirements 2.5**

### Property 11: Design Token Consistency

*For any* styled element in the pricing components, it should use CSS custom properties rather than hardcoded color, spacing, or typography values

**Validates: Requirements 4.1**

### Property 12: Visual Design Consistency

*For any* design token change, visual consistency should be maintained across all pricing components through shared custom properties

**Validates: Requirements 4.2**

### Property 13: Interaction Timing Consistency

*For any* interactive element with hover states, the transition timing and easing should follow consistent patterns defined in the design tokens

**Validates: Requirements 4.3**

### Property 14: Animation Pattern Compliance

*For any* animation in the pricing interface, it should use timing, easing, and motion patterns consistent with the established design system

**Validates: Requirements 4.4**

### Property 15: CSS Modification Safety

*For any* modification to CSS styling properties, the underlying component functionality (event handling, state management, data display) should remain intact

**Validates: Requirements 5.5**

## File Structure Impact

### Modified Files
- `client/src/styles/pricing.css` - Complete restructure with PC/CMP systems
- No component JavaScript files need modification

### Testing Strategy
- **Unit Tests**: Verify CSS classes render correctly for specific component states
- **Property Tests**: Validate universal behavior across different configurations
- **Integration Tests**: Test full pricing page functionality with restructured CSS
- **Visual Regression Tests**: Ensure visual consistency after CSS restructure

The restructured CSS will maintain all existing functionality while providing the missing class systems expected by the components, resulting in proper styling and eliminating build issues.