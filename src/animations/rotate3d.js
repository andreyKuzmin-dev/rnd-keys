/* eslint-disable no-unused-vars */
export default {
    hover(e, hoverableW, hoverableH, element) {
        const offsetCoordinates = this._getOffsetCoordinates(e);
        const angles = this._calcAngles(hoverableW, hoverableH, offsetCoordinates.x, offsetCoordinates.y);
        const styleStr = `rotateX(${-angles.hAngle}deg) rotateY(${angles.wAngle}deg)`;
        element.style.setProperty('transform', styleStr);
        element.style.setProperty('-moz-transform', styleStr);
        element.style.setProperty('-webkit-transform', styleStr);
        element.style.setProperty('-o-transform', styleStr);
        element.style.setProperty('-ms-transform', styleStr);
    },
    reset(element) {
        const styleStr = `rotateX(0deg) rotateY(0deg)`;
        element.style.transitionDuration = '300ms';
        setTimeout(()=>{element.style.transitionDuration = '0ms'},300)
        element.style.setProperty('transform', styleStr);
        element.style.setProperty('-moz-transform', styleStr);
        element.style.setProperty('-webkit-transform', styleStr);
        element.style.setProperty('-o-transform', styleStr);
        element.style.setProperty('-ms-transform', styleStr);
    },
    _getOffsetCoordinates(e) {
        let offsetX = e.offsetX;
        let offsetY = e.offsetY;
        let element = e.target;
        if (![...element.classList].includes('hoverable')) {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        }
        return {x: offsetX, y: offsetY};
    },
    _calcAngles(w,h,x,y) {
        const wPercent = w/100;
        const hPercent = h/100;
        const calculatedWAngle = Math.round((x/wPercent)/5) - 10;
        const calculatedHAngle = Math.round((y/hPercent)/5) - 10;
        console.log(x,y);
        return {wAngle: calculatedWAngle, hAngle: calculatedHAngle};
    }
}