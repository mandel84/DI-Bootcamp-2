class Video{
    constructor(title,uploader,time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }
     watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
}
    
}
const myVideo = new Video('love is in the air','Jay',6.240);
myVideo.watch()

const arr = [
   {
        title:'aaa' ,
        uploader: 'Mike',
        time: 3.900,
    },
   {
        title:'bbb' ,
        uploader:'Rob' ,
        time:2.500,
    },
    {
        title:'ccc' ,
        uploader:'Fred' ,
        time:2.200,
    }
    ,
       {  title:'ddd' ,
        uploader:'Alfred' ,
        time:4.000,
    },
    
    { title:'eee' ,
        uploader:'Marina' ,
        time:4.000
}
    
]
for (const videoData of arr){
const video = new Video(videoData.title, videoData.uploader, videoData.time)
video.watch();
}
