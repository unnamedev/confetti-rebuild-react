import ico from "../../assets/images/price/crown-ico.svg"

export const data = {
    headline: "Pricing",
    list: [
        {
            name: "Free",
            prices: [
                {
                    value: "$0",
                    valueName: "/ forever"
                }
            ],
            habitsCount: "3 Free Habits",
            buttonText: "Get Started"
        },
        {
            icoSrc: `${ico}`,
            name: "Premium",
            prices: [
                {
                    value: "$2.50",
                    valueName: "/ month"
                },
                {
                    value: "$25.00",
                    valueName: "/ year"
                }
            ],
            habitsCount: "Unlimited Habits",
            buttonText: "Get Started"
        }
    ]
}