import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-action"

type Action<TInput, TOutput> = (data: TInput) =>
    Promise<ActionState<TInput, TOutput>>

interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: string) => void;
    onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
    action: Action<TInput, TOutput>,
    options: UseActionOptions<TOutput> = {}
) => {
    const [fieldErrors, setFieldErrors] = useState<FieldErrors<TInput> | undefined>(
        undefined
    )
    const [error, setError] = useState<string | undefined>(undefined)
    const [data, setData] = useState<TOutput | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    //accepts input, sends input into action, action runs through state to check validation
    const execute = useCallback(
        async (input: TInput) => {
            setIsLoading(true);

            try {
                const result = await action(input)

                if (!result) {
                    return
                }
                    //always update fieldErrors regardless if they exist or not
                    setFieldErrors(result.fieldErrors)

                if (result.error) {
                    setError(result.error)
                    options.onError?.(result.error)
                }

                //successfully created the record
                if (result.data) {
                    setData(result.data)
                    options.onSuccess?.(result.data)
                }
            } finally {
                setIsLoading(false);
                options.onComplete?.()
            }
        },
        [action, options]
    )

    return {
        execute,
        fieldErrors,
        error,
        data,
        isLoading
    }
}