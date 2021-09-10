---
slug: "/style_guide/notification-banners"
title: "Notification Banners"
---

### Types of Banners

* Warning: `bannerWarning` - red
* Success: `bannerSuccess` - green
* Informational: `bannerInfo` - blue

<img src="https://lh6.googleusercontent.com/1GKRBTwoJQVlxdrFEuzzxSOkTq6kUy5Tpu52ZlOGqLINBaPc5EvV-0wolBzvfoQBsnn9TkEyO1rglzTSHOJ4A9JSICcuWyvY5x6vcF3l0WdglrfX3puY4V2j4vc9uN1fPVpK47jJ=s0" alt="all three notification banner types" />

### Component `NotificationBanner`

#### Props
* theme - required
* bannerType - bannerWarning | bannerInfo | bannerSuccess - required
* message - string - required
* onClose - function - optional
* onPress - function - optional

### General Appearance
* Text
  * Circular, 14pt, `theme.COLORS.white`
  * Text is vertically centered
* Bar minimum height 60
* Close icon
  * centered on a 60px wide / bar height background of 15% transparent white
  * this entire transparent block is the touch area for closing the bar
* In some cases, the left part of the bar will be a touch area
