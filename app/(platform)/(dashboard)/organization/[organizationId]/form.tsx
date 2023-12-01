"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";

export const Form = () => {
    const initialState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(create, initialState)


    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board title"
                    className="border-black border p-1"
                />
                <FormInput errors={state?.errors}/>
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}