export default function getHintFontColor(val: number): string {
    let color = '';

    switch (val) {
        case 1:
            color = 'blue'
            break;
        case 2:
            color = 'green'
            break;
        case 3:
            color = 'red'
            break;
        case 4:
            color = 'navy'
            break;
        case 5:
            color = 'darkred'
            break;
        case 6:
            color = 'deepskyblue'
            break;
        case 7:
            color = 'navy'
            break;
        case 8:
            color = 'gray'
            break;
        default:
            break
    }

    return color;
}