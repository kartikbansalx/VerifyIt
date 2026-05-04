---
name: Academic Ledger
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#b76dff'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system establishes a premium, immutable aesthetic for academic validation. The brand personality balances the rigorous authority of traditional institutions with the futuristic transparency of blockchain technology. It aims to evoke feelings of security, permanence, and professional achievement.

The primary visual style is **Glassmorphism**. By using translucent layers and high-quality background blurs, the interface creates a sense of depth and "light-through-data." This approach softens the tech-heavy nature of blockchain, making the platform feel accessible yet sophisticated. Contrast is high, ensuring that verified data remains the focal point against deep, obsidian-like backgrounds.

## Colors

The palette is centered on a deep charcoal and navy foundation to provide a "void" where glass elements can shine. 

- **Primary & Secondary:** A vibrant spectrum from Indigo to Cyan creates the core action gradients, representing the flow of digital information.
- **Success/Error:** Highly saturated Green and Red are reserved strictly for validation states, providing instant cognitive feedback on certificate authenticity.
- **Surface Colors:** Neutrals use a blue-tinted dark slate to maintain a cohesive, tech-forward temperature across the UI.

## Typography

This design system utilizes **Plus Jakarta Sans** for its geometric clarity and modern, friendly proportions. The typeface bridges the gap between a corporate ledger and a modern digital experience.

- **Headlines:** Use tighter letter spacing and heavier weights to anchor the page.
- **Body:** Standard weights with generous line height to ensure readability of academic credentials.
- **Labels:** Uppercase tracking is applied to small labels (like "Verified" or "TX ID") to distinguish metadata from content.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain the integrity of certificate documents, while transitioning to a fluid model for mobile.

- **Grid:** A 12-column system with 24px gutters.
- **Rhythm:** An 8px linear scale governs all padding and margins, ensuring consistent vertical rhythm across varied content blocks.
- **Visual Breath:** Large internal padding within glass cards (minimum 32px) is used to prevent the interface from feeling cluttered, emphasizing the "prestige" of the academic content.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Ambient Shadows** rather than traditional solid fills.

- **Layer 0 (Background):** Solid deep charcoal (`#020617`).
- **Layer 1 (Cards):** 40% opacity background with a 16px to 24px backdrop blur. A subtle 1px inner border (white at 10% opacity) simulates the edge of glass.
- **Layer 2 (Modals/Popovers):** Higher opacity (60%) and more aggressive blur.
- **Shadows:** Soft, elongated shadows with a slight indigo tint (`rgba(99, 102, 241, 0.15)`) are used to lift active glass elements off the background.

## Shapes

The shape language is consistently **Rounded**, reflecting the approachability of the platform.

- **Standard Elements:** 0.5rem (8px) for inputs and smaller components.
- **Containers/Cards:** 1rem (16px) for the primary certificate and profile cards.
- **Buttons:** Fully pill-shaped or 1.5rem (24px) to create a distinct interactive signature against the more structural card shapes.

## Components

- **Buttons:** Primary buttons must use a linear gradient (Indigo to Cyan) with white text. Hover states should increase the gradient vibrancy or add a subtle outer glow.
- **Cards:** The hallmark component. Must feature the `backdrop-filter: blur()` property, a thin translucent border, and soft indigo shadows.
- **Validation Chips:** Small, high-contrast badges (e.g., "Verified on Ethereum") using semantic colors with a 10% opacity background of the same color for a "glass-tint" effect.
- **Input Fields:** Dark, semi-transparent fills with 1px borders that glow indigo on focus. 
- **Blockchain Timeline:** A vertical list component showing the "Chain of Custody" for a certificate, using thin lines and glowing nodes to represent blocks.
- **QR Codes:** Encapsulated in a white, slightly rounded container to ensure scannability against the dark theme.