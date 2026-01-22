interface ScrollFillerProps {
    amount: number;
    content: string | "lorem ipsum" | "random";
}

const ScrollFiller = ({ amount, content }: ScrollFillerProps) => {
    if (content === "lorem ipsum") {
        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }

    return (
        <>
            {Array.from({ length: amount }).map((_, i) => (
                <h1 key={i}>
                {
                    content === "random"
                    ? Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                    : content
                }
                
                </h1>
            ))}
        </>
    )
}

export default ScrollFiller;