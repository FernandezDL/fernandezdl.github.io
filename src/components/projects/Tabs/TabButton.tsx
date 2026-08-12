type TabButtonProps = {
    text: string;
    active: boolean;
    onClick: () => void;
};

export default function TabButton({
                       text,
                       active,
                       onClick,
                   }: TabButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                shrink-0
                px-6 py-4
                text-sm uppercase
                transition-colors

                ${
                active
                    ? "bg-primary text-background"
                    : "text-foreground hover:bg-muted"
            }
            `}
        >
            {text}
        </button>
    );
}