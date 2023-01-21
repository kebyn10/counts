

const multer=("multer")
const path=("path")


const storage=multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,path.join(__dirname,'./upload'))
    },
    filename:function (req,file,cb) {
        cb(null,`${file.filename}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})


module.exports=storage