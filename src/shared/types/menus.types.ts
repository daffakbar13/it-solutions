const menu = ['Demos', 'Blog', 'Features', 'Pages', 'Portfolio', 'Shop'] as const

export type MenuTypes = (typeof menu)[number]
