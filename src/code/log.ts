const logMessageToScreen: (message: string) => void =
    (message: string): void => {
        const messageDiv: HTMLDivElement = document.createElement('div')
        document.body.appendChild(messageDiv)
        messageDiv.innerText = message
    }

// tslint:disable-next-line:no-any
const logMessageToConsole: (...message: any[]) => void =
    // tslint:disable-next-line:no-any
    (...message: any[]): void => {
        // tslint:disable-next-line:no-console
        console.log(...message)
    }

export {
    logMessageToScreen,
    logMessageToConsole,
}
