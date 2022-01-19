import logo from '../../assets/images/header/logo.svg'
import ico01 from '../../assets/images/footer/ico-1.svg'
import ico02 from '../../assets/images/footer/ico-2.svg'

export const data = {
    logo: {
        href: "/",
        alt: "Confetti",
        src: `${logo}`
    },
    copyright: "Copyright",
    menus: [
        [
            {
                href: "/policy",
                label: "Privacy Policy"
            },
            {
                href: "/terms",
                label: "Terms of Service"
            },
            {
                href: "#",
                label: "Email Us"
            }
        ],
        [
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
            },
        ]
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