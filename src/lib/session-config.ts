// Pathway Session pricing + Cal.com wiring.
//
// Vitalii updates `foundingClaimed` by hand and commits. When it hits
// `foundingTotal`, the page auto-switches to `standardPrice` and hides
// the founding block. Do not fake this number — quiet authority breaks
// on invented scarcity.

export const SESSION_CONFIG = {
  // Cal.com event slug. Vitalii replaces this after Cal.com + Stripe app setup.
  calLink: 'vitalii/pathway-session',
  calDirectUrl: 'https://cal.com/vitalii/pathway-session',

  // Pathway Session pricing (in EUR).
  foundingPrice: 100,
  standardPrice: 150,
  foundingTotal: 20,
  foundingClaimed: 0,

  // MATE AI plans referenced in the pricing ladder (§6 of the brief).
  careerPrice: 149,
  careerUrl: 'https://app.talent-mates.com/mate-pro-auth.html',
  startPrice: 19,
  startUrl: 'https://app.talent-mates.com/mate-pro-auth.html',
} as const

export function getSessionPricing() {
  const remaining = Math.max(
    0,
    SESSION_CONFIG.foundingTotal - SESSION_CONFIG.foundingClaimed,
  )
  const foundingActive = remaining > 0
  const currentPrice = foundingActive
    ? SESSION_CONFIG.foundingPrice
    : SESSION_CONFIG.standardPrice
  return { remaining, foundingActive, currentPrice }
}
