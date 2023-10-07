import { FirebaseOptions } from "firebase/app";
import * as React from "react";
import { WebView } from "./WebView";
interface Props extends React.ComponentProps<typeof WebView> {
    firebaseConfig?: FirebaseOptions;
    firebaseVersion?: string;
    appVerificationDisabledForTesting?: boolean;
    languageCode?: string;
    onLoad?: () => any;
    onError?: () => any;
    onVerify: (token: string) => any;
    onFullChallenge?: () => any;
    invisible?: boolean;
    verify?: boolean;
}
export default function FirebaseRecaptcha(props: Props): React.JSX.Element | null;
export {};
//# sourceMappingURL=FirebaseRecaptcha.d.ts.map