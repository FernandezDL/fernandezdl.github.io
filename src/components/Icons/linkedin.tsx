export default function LinkedinIcon(){
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8 text-primary"
            aria-hidden="true"
        >
            {/* Background */}
            <rect
                width="24"
                height="24"
                rx="4"
                fill="currentColor"
            />

            {/* Dot */}
            <circle
                cx="6.5"
                cy="7"
                r="1.5"
                className="fill-background"
            />

            {/* i */}
            <rect
                x="5"
                y="9.5"
                width="3"
                height="9"
                rx="0.5"
                className="fill-background"
            />

            {/* n */}
            <path
                className="fill-background"
                d="
                    M10 9.5
                    H13
                    V10.8
                    C13.8 9.8 15 9.2 16.5 9.2
                    C19.3 9.2 20 11.1 20 13.7
                    V18.5
                    H17
                    V14
                    C17 12.7 16.7 11.8 15.4 11.8
                    C14 11.8 13 12.7 13 14.2
                    V18.5
                    H10
                    Z
                "
            />
        </svg>
    );
}