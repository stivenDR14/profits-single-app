import { Portfolio } from "../model/portfolio";

export const enum themes{
    Light= "emerald",
    Happy= "bumblebee",
}

export const portfolioData1: Portfolio={
    stocks: ['Pfizer', 'Nike', 'Citibank', 'General Motors', 'Amazon'],
    date: [new Date(2021,11,6), new Date(2021,11,7), new Date(2021,11,8), new Date(2021,11,9), new Date(2021,11,10),
         new Date(2021,11,13), new Date(2021,11,14), new Date(2021,11,15), new Date(2021,11,16), new Date(2021,11,17),
         new Date(2021,11,20), new Date(2021,11,21), new Date(2021,11,22), new Date(2021,11,23), new Date(2021,11,24)],
    profit: [0.05, 0.03, -0.04, -0.8, -0.02,
            0.01, 0.04, 0.11, 0.07, 0.24,
            0.07, 0.08, 0.05, 0.09, 0.08 ]
}


export const portfolioData2: Portfolio={
    stocks: ['Banco de Chile', 'Walt Disney', 'Apple', 'Meta'],
    date: [new Date(2021,11,6), new Date(2021,11,7), new Date(2021,11,8), new Date(2021,11,9), new Date(2021,11,10),
         new Date(2021,11,13), new Date(2021,11,14), new Date(2021,11,15), new Date(2021,11,16), new Date(2021,11,17),
         new Date(2021,11,20), new Date(2021,11,21), new Date(2021,11,22), new Date(2021,11,23), new Date(2021,11,24)],
    profit: [0.15, 0.13, 0.08, 0.08, 0.05,
            0.06, 0.07, 0.05, 0.03, 0.04,
            -0.01, -0.8, -0.8, -0.7, -0.9 ]
}


export const portfolioData3: Portfolio={
    stocks: ['NVidia', 'Tecnoglass', 'Citibank', 'Enel', 'Apple'],
    date: [new Date(2021,11,6), new Date(2021,11,7), new Date(2021,11,8), new Date(2021,11,9), new Date(2021,11,10),
         new Date(2021,11,13), new Date(2021,11,14), new Date(2021,11,15), new Date(2021,11,16), new Date(2021,11,17),
         new Date(2021,11,20), new Date(2021,11,21), new Date(2021,11,22), new Date(2021,11,23), new Date(2021,11,24)],
    profit: [0.25, 0.3, 0.23, 0.15, 0.23,
            0.21, 0.14, 0.12, 0.17, 0.14,
            0.1, 0.8, 0.15, 0.19, 0.18 ]
}