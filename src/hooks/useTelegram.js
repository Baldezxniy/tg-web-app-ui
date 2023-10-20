const tg = window.Telegram.WebApp;

export const useTelegram = () => {

    const onClose = () => {
        tg?.close();
    };

    const onTogleButton = () => {
        if (tg?.MainButton?.isVisible) {
            tg?.MainButton?.hide();
        } else {
            tg?.MainButton?.show();
        }
    }

    const mainButton = tg.MainButton;

    return {
        tg,
        onTogleButton,
        mainButton,
        user: tg?.initDataUnsafe?.user,
        onClose,
        queryId: tg.initDataUnsafe?.query_id
    };
} 