"use client"

import { ListWithCards } from "@/types";
import { List } from "@prisma/client"
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";
import { DragDropContext, Droppable } from "@hello-pangea/dnd"

interface ListContainerProps {
    data: ListWithCards[]
    boardId: string;
}

//generic reorder function
function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed);

    return result;
}

export const ListContainer = ({
    data,
    boardId,
}: ListContainerProps) => {
    //modify locally before adding to database
    const [orderedData, setOrderedData] = useState(data)

    useEffect(() => {
        setOrderedData(data)
    }, [data])

    const onDragEnd = (result: any) => {
        const { destination , source, type} = result

        if(!destination) {
            return
        }

        // checking if dropped in the same position
        if (
            destination.droppableId === source.droppableId && 
            destination.index === source.index
        ) {
            return
        }

        // check if user moves a list
        if (type === "list") {
            const items = reorder(
                orderedData,
                source.index,
                destination.index,
            ).map((item, index) => ({ ...item, order: index}))

            setOrderedData(items)
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
                {(provided) => (
                    <ol
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex gap-x-3 h-full"
                    >
                        {orderedData.map((list, index) => {
                            return (
                                <ListItem
                                    key={list.id}
                                    index={index}
                                    data={list}
                                />
                            )
                        })}
                        {provided.placeholder}
                        <ListForm />
                        <div className="flex-shrink-0 w-1" />
                    </ol>
                )}

            </Droppable>

        </DragDropContext>

    )
}