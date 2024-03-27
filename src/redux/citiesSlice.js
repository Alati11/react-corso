import { createSlice } from '@reduxjs/toolkit';
// import { add } from '../redux/citiesSlice';

export const citiesSlice = createSlice ({
    name: 'cities',
    initialState: {
        value: [
              {
                id: 0,
                name: "Tokyo",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo alias, voluptate odio tempora velit?",
                imgUrl: "https://media.istockphoto.com/id/491924730/it/foto/vivace-incrocio-di-shibuya-a-tokyo.jpg?s=1024x1024&w=is&k=20&c=sqx1vcCVLetGeZzclkMRrv9-pL_fDYzaYylKysOzJKc=",
                isVisited: true,
              },
              {
                id: 1,
                name: "New York",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo alias, voluptate odio tempora velit?",
                imgUrl: "https://media.istockphoto.com/id/599766748/it/foto/la-citt%C3%A0-dei-sogni-lo-skyline-di-new-york-al-crepuscolo.jpg?s=1024x1024&w=is&k=20&c=gR3vllXiI817RZjhaLcMZ1i_va57GVA2zfb-S4sAAnQ=",
                isVisited: false,
              },
              {
                id: 2,
                name: "London",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo alias, voluptate odio tempora velit?",
                imgUrl: "https://media.istockphoto.com/id/1173597900/it/foto/londra-allalba-colorata.jpg?s=1024x1024&w=is&k=20&c=Zm3kb_trXTLr3dHyqIRcAnySBs5Sp2NLnF9aBunOgKI=",
                isVisited: true,
              },
              {
                id: 3,
                name: "Paris",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo alias, voluptate odio tempora velit?",
                imgUrl: "https://media.istockphoto.com/id/635758088/it/foto/alba-alla-torre-eiffel-a-parigi-lungo-la-senna.jpg?s=1024x1024&w=is&k=20&c=ZNN4Odk5ggcvw0cLBUXsrpLuduyGzXZvCsbbE_PeebM=",
                isVisited: false,
              },  
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },  
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer