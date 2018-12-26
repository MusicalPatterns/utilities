const logMessageToScreen: (message: string) => void =
    (message: string): void => {
        const messageDiv: HTMLDivElement = document.createElement('div')
        document.body.appendChild(messageDiv)
        messageDiv.innerText = message
    }

const logMessageToConsole: (message: string) => void =
    (message: string): void => {
        // tslint:disable-next-line:no-console
        console.log(message)
    }

export {
    logMessageToScreen,
    logMessageToConsole,
}
