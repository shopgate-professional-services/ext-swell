# Shopgate Connect - Swell

This extension integrates a Shopgate app with the [Swell](https://www.swellrewards.com/). Swell is a loyalty provider that rewards the user with points for discounts and free items.

#### Swell Active Campaigns Widget
Widget can be configured in Shopgate Merchant admin and serves as a notice for valid campaigns to earn points. You can add the following configuration to the widget in the settings object.
- `backgroundColor` (string): background color for campaign cards.
- `fontColor` (string): font color for campaign cards.

#### Swell Welcome Widget
Widget can be configured in Shopgate Merchant admin and serves as a welcome notice to get user to sign in or showcase the amount of points the user has. You can add the following configuration to the widget in the settings object.
- `buttonBackgroundColor` (string): background color for buttons in widget
- `buttonFontColor` (string): font color for buttons in widget
- `headerTextColor` (string): font color for header text in widget while logged in
- `historyButtonText` (string): text for reward history button
- `redeemButtonText` (string): text for redemption button
- `loggedOutTitleFontColor` (string): font color for logged out header title
- `loggedOutTitle` (string): text for logged out header title
- `loggedOutSubtext` (string): subtext fo logged out subtext
- `signUpText` (string): text for sign up button
- `accountText` (string): text for account notice
- `signInText` (string): text for sign in notice
- `loggedOutBackground` (string): css background value for logged out view
- `widgetMargin` (string): css margin value for widget

### Swell Extension Config
- `swellSdkUrl` (string): SRC to Swell JavaScript sdk loader
- `showSwellNavigation` (boolean): Should show navigation button in tab bar and nav drawer
- `swellButtonText` (string): Swell text for button that leads to Rewards Page
- `swellRewardsPath` (string): Swell Rewards Path
- `swellIconSvg` (string): Svg for swell icon
- `allowedCampaigns` (Array): Titles of swell campaigns allowed to be shown on the app

## About Shopgate	

Shopgate is the leading mobile commerce platform.	

Shopgate offers everything online retailers need to be successful in mobile. Our leading	
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native	
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.	

## License	

Shopgate Connect - Swell is available under the Apache License, Version 2.0.	

See the [LICENSE](./LICENSE) file for more information.
