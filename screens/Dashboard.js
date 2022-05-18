import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-native-elements';
import styled from 'styled-components';
import { Icon } from 'react-native-elements'
import { Pressable } from 'react-native';

const options = [
    {
        title: 'Sales',
        icon: 'money',
        color: '#f4a261',
        screen: 'Sales'
    },
    {
        title: 'Stock',
        icon: 'inventory',
        color: '#ffb4a2',
        screen: 'Stock'
    },
    {
        title: 'Supppliers',
        icon: 'people',
        color: '#8ecae6',
        screen: 'Suppliers'
    },
    {
        title: 'Staff',
        icon: 'people',
        color: '#83c5be',
        screen: 'Staff'
    },
    {
        title: 'Attendance',
        icon: 'edit',
        color: '#a3b18a',
        screen: 'Settings'
    },
    {
        title: 'Logout',
        icon: 'logout',
        color: '#f4978e',
        screen: 'Settings'
    }
]




const Dashboard = ({ navigation }) => {

    const [today, setToday] = useState([]);

    useEffect(() => {
        fetch('http://fyp-nik.herokuapp.com/sales/today').then(res => res.json()).then(data => setToday(data[0])).catch(err => alert(err));
        return () => { }
    }, [])
    return (
        <Container>
            <StatusBar style='light' />
            <Heading>Welcome, Muhammad Inam Ur Rehman</Heading>

            <SalesConatiner>
                <SalesHeading>Today's Sales</SalesHeading>
                <AmountContainer>
                    {
                        today.sum && today.cost && <>
                            <SalesAmount>Total Sales: {today.sum}</SalesAmount>
                            <SalesProfit>Est. Profit: {today.cost}</SalesProfit>
                        </>

                    }
                </AmountContainer>
                {/* <Button
                    buttonStyle={{
                        backgroundColor: '#f4a261',
                    }}
                    title="My Button" /> */}
            </SalesConatiner>

            <OptionsConatiner>
                {
                    options.map((option, index) => (
                        <OptionConatiner key={index}>

                            <Pressable style={{
                                backgroundColor: option.color,
                                elevation: 5,
                                width: "100%",
                                height: 120,
                                borderRadius: 10,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                                android_ripple={{
                                    color: "white",
                                }}
                                onPress={() => navigation.navigate(option.screen)}>
                                <Icon
                                    type='material-icons'
                                    color="black"
                                    name={option.icon} />
                                <SalesOptionHeading>{option.title}</SalesOptionHeading>
                            </Pressable>
                        </OptionConatiner>
                    ))
                }
            </OptionsConatiner>

        </Container>
    )
}

export default Dashboard


// Styled Components

const Container = styled.ScrollView`
    flex: 1;
    background-color: #fff;

`;

const Heading = styled.Text`
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
`;

const SalesConatiner = styled.View`
    background-color: #2a9d8f;
    width: 90%;
    margin: 10px auto;
    min-height: 100px;
    border-radius: 5px;
    padding: 10px;
`;
const SalesHeading = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: center;
    justify-content: center;

`;
const AmountContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
`;
const SalesAmount = styled.Text`
    color: #fff;
    font-size: 16px;
    text-align: center;
    justify-content: center;

`;
const SalesProfit = styled.Text`
    color: #fff;
    font-size: 16px;
    text-align: center;
    justify-content: center;

`;
const OptionsConatiner = styled.View`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const OptionConatiner = styled.View`
    width: 40%;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
    
`;
const SalesOptionHeading = styled.Text`
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
`;
