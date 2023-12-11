import React, {useRef} from 'react';
import axios from "../../utils/axios";
import {Button} from "@mui/material";

const ClothesAddBtn = ({images,setImages}) => {
    const image = useRef()

    const handleChangeImage1 = async (e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0]
            formData.append('file', file)
            await axios.post('/upload', formData,{
                headers: {    'Content-Type': 'multipart/form-data',}
            }).then(({data}) =>  setImages(data.url))

        } catch (err){
            console.log(e)
            console.log(err, 'Ошибка')
            alert('Ошибка при загрузке файла')
        }

    }

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button  onClick={() => image.current.click()} type='button' variant="contained" style={{backgroundColor: '#D0082C',display:'block',textAlign:'center',margin:'0 auto'}} color="success">
                Загрузить картинку
            </Button>
            <input ref={image}  hidden  type="file" onChange={handleChangeImage1} id='image'/>
        </div>
    );
};

export default ClothesAddBtn;