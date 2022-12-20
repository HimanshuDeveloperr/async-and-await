console.log("person1:shows tickets")
console.log("person2:shows tickets")


const preMovie= async ()=>{

    const myWifeBringingTickets= new Promise((resolve,reject)=>{
        setTimeout(() => {
    
            resolve("ticket")
            
        }, 3000);
    })

    const getpopcorn=new Promise((resolve,reject)=>{
        resolve(`popcorn`)
        })
    
        const getbutter= new Promise((resolve,reject)=>{
                resolve(`butter`)
            })
        
            const getColdDrinks=new Promise((resolve,reject)=>{
                resolve(`colddrinks`)
            })

    let ticket= await myWifeBringingTickets;
    console.log(`wife:i got the ${ticket}`)

    console.log('husband:we should go in')
    console.log('wife:im hungry')

    let popcorn=await getpopcorn
    console.log(`husband:i will buy ${popcorn}`)
    console.log(`wife:i need butter in my ${popcorn}`)

    let butter=await getbutter
    console.log(`ok,will remember that ${butter} now lets go with the ${ticket}`)

    let colddrinks= await getColdDrinks;
    console.log(`wife: when you are at it could you also bring me some ${colddrinks}`)
    console.log(`husband: ok , now shall we `)

    return ticket


}


preMovie().then((m)=>{console.log(`person3:shows ${m}`)})

console.log("person4:shows tickets")
console.log("person5:shows tickets")