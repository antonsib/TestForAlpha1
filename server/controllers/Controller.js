const testData  = require('./testData.json');
class Controller{

    async getAll(req,res,next){
        let i=0;
            testData.map(test => {
                    i++;
                    test.resources = JSON.parse(test.resources)
                     for(let j=0;j<test.resources.length;j++){
                         if(test.resources[j].resource==="ACTIVERATE") test.experience1=test.resources[j].value
                         if(test.resources[j].resource==="PASSIVERATE") test.experience2=test.resources[j].value
                         if(test.resources[j].resource==="MONEY") test.money=test.resources[j].value
                     }
                    test.experience=test.experience1+test.experience2
                    test.place = i
                    test.resources = JSON.stringify(test.resources)
                }
            )
        testData.sort(function (a,b){
            return b.experience - a.experience || b.money -a.money
        })
        res.send(testData)
    }

    async get(req,res,next){
        let i=0;
        testData.map(test=>{
            i++;
            test.resources = JSON.parse(test.resources)
            for(let j=0;j<test.resources.length;j++){
                if(test.resources[j].resource==="ACTIVERATE") test.experience1=test.resources[j].value
                if(test.resources[j].resource==="PASSIVERATE") test.experience2=test.resources[j].value
                if(test.resources[j].resource==="MONEY") test.money=test.resources[j].value
            }
            test.experience=test.experience1+test.experience2
            test.place = i
            test.resources = JSON.stringify(test.resources)
            }
        )
        testData.sort(function (a,b){
            return b.experience - a.experience || b.money - a.money
        })
        let stop=5;
        let b=0;
        let id=1;
        for(let j=0;stop!==0;j++,b++){
            if(testData[j+1].money+testData[j+1].experience!==testData[j].money+testData[j].experience) {
                stop--;
                id++;
                testData[j+1].place=id
            }
            else {testData[j+1].place=id}
        }
        const sendData=testData.slice(0,b)
        res.send(sendData)
    }
}

module.exports = new Controller()