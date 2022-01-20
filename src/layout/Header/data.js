import burger from '../../assets/images/header/burger.svg'
import logo from '../../assets/images/header/logo.svg'
import logoWhite from '../../assets/images/header/logo-white.svg'

import ico01 from '../../assets/images/footer/ico-1.svg'
import ico02 from '../../assets/images/footer/ico-2.svg'

export const data = {
    logo: {
        alt: "Confetti",
        src: `${logo}`,
        srcWhite: `${logoWhite}`
    },
    burger: `${burger}`,
    desktopMenu: [
        {
            label: "Pricing",
            href: "/pricing"
        },
        {
            label: "Sign In",
            href: "/login"
        },
        {
            label: "Try for Free",
            href: "/signup",
            type: "button"
        }
    ],
    mobileData: {
        user: [
            {
                label: "Login",
                href: "/login"
            },
            {
                label: "Sign Up",
                href: "/signup"
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
                href: "/policy",
                label: "Privacy Policy"
            },
            {
                href: "/terms",
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