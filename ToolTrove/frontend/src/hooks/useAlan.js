import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function useAlan() {

    useEffect(() => {
        alanBtn({
            key: 'ed803c99a4d37d632b3f686d11a9908a2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                console.log(commandData)
            }
        })
    }, [])

  return null
}
