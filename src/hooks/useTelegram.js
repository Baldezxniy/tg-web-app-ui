const tg = window.Telegram.WebApp;

export const useTelegram = () => {

    const onClose = () => {
        tg.close();
    };

    const onTogleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        tg,
        onTogleButton,
        user: tg.initDataUnsafe.user,
        onClose
    };
} 