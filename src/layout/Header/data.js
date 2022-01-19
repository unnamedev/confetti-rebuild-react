import burger from '../../assets/images/header/burger.svg'
import logo from '../../assets/images/header/logo.svg'

import ico01 from '../../assets/images/footer/ico-1.svg'
import ico02 from '../../assets/images/footer/ico-2.svg'

export const data = {
    logo: {
        alt: "Confetti",
        src: `${logo}`
    },
    burger: `${burger}`,
    desktopMenu: [
        {
            label: "Pricing",
            href: "/pricing"
        },
        {
            label: "Sign In",
            href: "#"
        },
        {
            label: "Try for Free",
            href: "#",
            type: "button"
        }
    ],
    mobileData: {
        user: [
            {
                label: "Login",
                href: "#"
            },
            {
                label: "Sign Up",
                href: "#"
            }
        ],
        pricing: [
            {
                label: "Pricing",
                href: "/pricing"
            }
        ],
        menuFirst: [
            {
                href: "#",
                label: "Privacy Policy"
            },
            {
                href: "#",
                label: "Policy of Service"
            },
            {
                href: "#",
                label: "Email Us"
            }
        ],
        menuSecond: [
            {
                href: "#",
                label: "Chrome Extension"
            },
            {
                href: "#",
                label: "iOS App"
            },
            {
                href: "#",
                label: "Android App"
            }
        ],
        socials: [
            {
                href: "#",
                src: `${ico01}`,
                alt: "Twitter"
            },
            {
                href: "#",
                src: `${ico02}`,
                alt: "Instagram"
            },
        ]
    }
}