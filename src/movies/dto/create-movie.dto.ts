//! DTO:data transfer object
//* 들어오는 데이타에 대해서 유효성 검사를 해준다.
import {IsString,IsNumber} from 'class-validator';

export class CreateMovieDto{
    @IsString()
    readonly title: string;
    
    @IsNumber()
    readonly year: number;
    @IsString({each:true})
    readonly genres: string[];
}