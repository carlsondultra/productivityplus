import { Button } from "@/components/ui/button";

interface BoardProps {
    title: string;
    id: string;
}

export const Board = ({
    title,
    id
}: BoardProps) => {
    return (
        <form className="flex items-center gap-x-2">
            <p>
                Board title: {title}
            </p>
            <Button variant="destructive" size="sm">
                Delete
            </Button>
        </form>
    )
}