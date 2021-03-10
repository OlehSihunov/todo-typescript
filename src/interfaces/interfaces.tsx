import React from 'react'

export interface ITask {
    task :string;
    id :string;
    completed :boolean;
    date :number;
    userLogin:string;
}

export interface IUser {
    login :string;
    password :string;
}