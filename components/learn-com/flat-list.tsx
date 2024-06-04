import { FlatList, View , Text} from "react-native"

const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', age: 35, email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', age: 28, email: 'bob@example.com' },
    { id: 5, name: 'Sarah Davis', age: 32, email: 'sarah@example.com' },
    { id: 6, name: 'Michael Wilson', age: 40, email: 'michael@example.com' },
    { id: 7, name: 'Emily Taylor', age: 22, email: 'emily@example.com' },
    { id: 8, name: 'David Martinez', age: 31, email: 'david@example.com' },
    { id: 9, name: 'Jessica Anderson', age: 27, email: 'jessica@example.com' },
    { id: 10, name: 'James Jackson', age: 38, email: 'james@example.com' },
    { id: 11, name: 'Linda White', age: 45, email: 'linda@example.com' },
    { id: 12, name: 'Matthew Lee', age: 29, email: 'matthew@example.com' },
    { id: 13, name: 'Karen Harris', age: 33, email: 'karen@example.com' },
    { id: 14, name: 'Steven Clark', age: 26, email: 'steven@example.com' },
    { id: 15, name: 'Amanda King', age: 36, email: 'amanda@example.com' },
    { id: 16, name: 'Daniel Turner', age: 39, email: 'daniel@example.com' },
    { id: 17, name: 'Ashley Walker', age: 24, email: 'ashley@example.com' },
    { id: 18, name: 'Christopher Hall', age: 37, email: 'christopher@example.com' },
    { id: 19, name: 'Patricia Young', age: 42, email: 'patricia@example.com' },
    { id: 20, name: 'Mark Hernandez', age: 34, email: 'mark@example.com' },
    { id: 21, name: 'Elizabeth Lopez', age: 23, email: 'elizabeth@example.com' },
    { id: 22, name: 'Joshua Scott', age: 41, email: 'joshua@example.com' },
    { id: 23, name: 'Melissa Green', age: 29, email: 'melissa@example.com' },
    { id: 24, name: 'Ryan Adams', age: 31, email: 'ryan@example.com' },
    { id: 25, name: 'Nicole Baker', age: 28, email: 'nicole@example.com' },
    { id: 26, name: 'Kevin Carter', age: 30, email: 'kevin@example.com' },
    { id: 27, name: 'Michelle Hall', age: 35, email: 'michelle@example.com' },
    { id: 28, name: 'Timothy Morris', age: 27, email: 'timothy@example.com' },
    { id: 29, name: 'Kimberly Rivera', age: 32, email: 'kimberly@example.com' },
    { id: 30, name: 'Jason Collins', age: 26, email: 'jason@example.com' },
    { id: 31, name: 'Mary Carter', age: 39, email: 'mary@example.com' },
    { id: 32, name: 'Erica Rodriguez', age: 22, email: 'erica@example.com' },
    { id: 33, name: 'Justin Campbell', age: 36, email: 'justin@example.com' },
    { id: 34, name: 'Rachel Phillips', age: 25, email: 'rachel@example.com' },
    { id: 35, name: 'Brian Evans', age: 29, email: 'brian@example.com' },
    { id: 36, name: 'Angela Stewart', age: 31, email: 'angela@example.com' },
    { id: 37, name: 'Gregory Sanchez', age: 33, email: 'gregory@example.com' },
    { id: 38, name: 'Laura Morris', age: 28, email: 'laura@example.com' },
    { id: 39, name: 'Kyle Ross', age: 34, email: 'kyle@example.com' },
    { id: 40, name: 'Tiffany Flores', age: 27, email: 'tiffany@example.com' },
    { id: 41, name: 'Brandon Rogers', age: 30, email: 'brandon@example.com' },
    { id: 42, name: 'Stephanie Reed', age: 26, email: 'stephanie@example.com' },
    { id: 43, name: 'Jose Ward', age: 35, email: 'jose@example.com' },
    { id: 44, name: 'Christina Butler', age: 29, email: 'christina@example.com' },
    { id: 45, name: 'Alexander Brooks', age: 38, email: 'alexander@example.com' },
    { id: 46, name: 'Rebecca Long', age: 23, email: 'rebecca@example.com' },
    { id: 47, name: 'Jonathan Reed', age: 32, email: 'jonathan@example.com' },
    { id: 48, name: 'Heather Mitchell', age: 27, email: 'heather@example.com' },
    { id: 49, name: 'Benjamin Price', age: 36, email: 'benjamin@example.com' },
    { id: 50, name: 'Samantha Coleman', age: 31, email: 'samantha@example.com' }
  ];
  
  type User = typeof users[0]

  const Item = (data : User)=>{
     
    return <View style={{
         padding : 20,
    }}>
        <Text>{data.name}</Text>
    </View>
}
  
const FlatLists = ()=>{
     

    return <View>
          <FlatList data={users} renderItem={({item})=> <Item key={item.id} {...item}/>}>
              
          </FlatList>
    </View>
}


export default FlatLists;