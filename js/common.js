$(document).ready(() => {

    /**
     * Отправка формы
     * @param event
     */
    let submitForm = (event) => {
        let form = $(event.target); // target - это сама форма с её id
        let response = ajaxForm(form); // в переменной response записываем результат обращения к серверу
        event.preventDefault();

        response.done((msg) => { //получаем объект msg, из него можно вытащить два параметра: сам msg и status
            let mes = msg.mes;
            let status = msg.status;
            let response_text = $('.order-modal__form > .order-modal__text');
            if (status === 'OK') {
                response_text.text(mes).addClass('success');
            } else {
                response_text.text(mes).addClass('error');
            }
            delModalOpen();
            delModalClose();
        });

        response.fail((jqXHR, textStatus) => {
            alert("Request failed " + textStatus);
        });
    };

// Универсальная функция для работы с формами
    let ajaxForm = (form) => {
        let data = form.serialize();
        let url = form.attr('action');

        return $.ajax({
            type: 'POST',
            url: url,
            dataType: 'JSON',
            data: data
        });
    };
    /**
     * Открытие модального окна
     */
    let delModalOpen = () => {
        $('#delivery_overlay.overlay')
            .fadeIn(300, () => {
                $('.order-modal__form').fadeIn("slow");
            });
    };
    /**
     * Закрытие модального окна
     */
    let delModalClose = () => {
        $('#delivery_close.order-modal__close').on('click', () => {
            $('.order-modal__form')
                .fadeOut(200, () => {
                        $('#delivery_overlay.overlay').fadeOut(300);
                    }
                );
        });
    };

    $('#order-form').on('submit', submitForm);
});