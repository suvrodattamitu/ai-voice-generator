import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-to-speech-layout";

export default function Layout({children}: {children: React.ReactNode}) {
    return <TextToSpeechLayout>{children}</TextToSpeechLayout>
}

/*
* 4 or 5 trades per week
* - buy on low of a week
* - sell on a high of a week
* - missing big opportunities by the greed of small profits
*
* - sell when over bought, everyone thinks no high will be possible
* - buy when over sold, when everyone thinks this level won't be touched
*/

