const DELAY = 30;

function hover_effect(x, old_txt) {
    if (!x.classList.contains('effect')) {
        x.classList.add('effect');
        const random_txt = [];
        for (let i = 0; i < 24; i++) {
            let t = '';
            for (var j = 0; j < old_txt.length; j++)
                t += old_txt.charAt(Math.floor(Math.random() * old_txt.length));

            random_txt.push(t);
        }

        random_txt.push(old_txt);

        for (let i = 0; i < random_txt.length; i++)
            set_delayed_txt(x, i, random_txt[i]);

        window.setTimeout(() =>
            x.classList.remove('effect'), DELAY * random_txt.length);
    }
}

function set_delayed_txt(node, time, txt) {
    window.setTimeout(() => {
        if (node.tagName == 'INPUT')
            node.setAttribute('placeholder', txt);
        else
            node.innerHTML = txt;

    }, DELAY * time);
}