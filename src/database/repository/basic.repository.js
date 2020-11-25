class Basic {
    constructor() {

    }
    async oddEvent(input) {
        const out = input.reduce((prev, curr) => {
            if (curr % 2 === 0) prev.even.push(curr);
            if (curr % 2 !== 0) prev.odd.push(curr);
            return prev;
        }, {
            even: [],
            odd: []
        });
        let output = []
        out.odd.sort((a, b) => b - a);
        out.even.sort((a, b) => a - b);
        out.odd.forEach((curr, i) => {
            output.push(curr); console.log(curr)
            if (out.even[i]) {
                output.push(out.even[i]); console.log(out.even[i]);
            }
        });
        out.even.splice(0, out.odd.length)
        if (out.even.length) {
            output.push(...out.even)
        }
        return output;
    }
    async stringPlace(input) {
        const basic = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split('')
        const basicinput = input.split('');
        const asc = basicinput.filter(v => basic.includes(v));
        const desc = [...asc].reverse();
        return basicinput.map(v => {
            const index = asc.findIndex(a => a === v);
            if (-1 !== index) {
                return desc[index];
            }
            return v
        }).join('')
    }
    async missingNumbers(input){
        let min = Math.min(...input), max = Math.max(...input);
        let output = [];
        while(min<=max){
            if(!input.includes(min)) output.push(min);
            min++;
            
        }
        return output;
    }
}
export default Basic;