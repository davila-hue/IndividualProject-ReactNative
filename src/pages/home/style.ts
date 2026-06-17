import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor:' #fff', 
    padding: 10 
  },

  searchBar: { 
    backgroundColor: '#eee', 
    borderRadius: 20, 
    padding: 10, 
    marginBottom: 10 
  },

  welcome: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center' 
  },

  categories: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 10 
  },

  category: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: 'dark-gray' 
  },

  card: { 
    flex: 1, 
    backgroundColor: '#f9f9f9', 
    margin: 5, 
    borderRadius: 8, 
    overflow: 'hidden' 
  },

  cardImage: { 
    width: '100%', 
    height: 180 
  },

  cardTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    padding: 5 
  },

  bottomNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    borderTopWidth: 1,
    borderColor: '#ddd' 
  },

  navItem: { 
    fontSize: 14, 
    color:'gray' 

  }
});
