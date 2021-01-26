import React, {Component} from 'react';
import store from 'store';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoStatusFilter from '../todo-status-filter';
import ToDoList from '../todo-list';
import ToDoAddForm from '../todo-add-form';

import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    label: "First test task...",
                    important: false,
                    done: false,
                    id: 1
                },
                {
                    label: "Second test task...",
                    important: true,
                    done: true,
                    id: 2
                }
            ],
            whiteTheme: false,
            searchText: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.searchTask = this.searchTask.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.maxID = 3;
    }

    componentDidMount() {

        const data =  store.get('data');
        
        if (data) {
            this.setState({data});
        } else {
            store.set('data', this.state.data);
        }

        const whiteTheme = store.get('theme');
        this.setState({whiteTheme});
      }

    searchTask(items, searchText) {
        if(searchText === 0) {
            return items;
        }

        return items.filter((item) => {
           return item.label.indexOf(searchText) > -1;
        })
    }

    filterTasks(items, filter) {
        if(filter === 'done') {
            return items.filter(item => item.done);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        this.setState({searchText: term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            store.set('data', newArr);
            return {
                data: newArr
            }
        });
    }

    onChangeTheme() {
        this.setState(({whiteTheme}) => {
            const oldTheme = whiteTheme;
            const newTheme = !oldTheme;
            store.set('theme', newTheme);
            return {
                whiteTheme : newTheme
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxID++
        } 

        if (/^\s+$/.test(newItem.label)) {
            return;
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            store.set('data', newArr);
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            store.set('data', newArr);
            return {
                data: newArr
            }
        })
    }
    
    onToggleDone(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, done: !old.done};
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            store.set('data', newArr);
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data, whiteTheme, searchText, filter} = this.state;

        const countOfItems = data.length;
        const countOfDone = data.filter(elem => elem.done).length;

        const visibleTasks = this.filterTasks(this.searchTask(data, searchText), filter);

        return (
            <div className="app">
                <AppHeader 
                    countOfItems={countOfItems}
                    countOfDone={countOfDone}
                    onChangeTheme={this.onChangeTheme}
                    whiteTheme={whiteTheme}/>
                <div className="search-panel d-flex"> 
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <ToDoStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <ToDoList 
                    todoItems={visibleTasks} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ToDoAddForm 
                    onAdd={this.addItem}/>
            </div>
        )
    }
    
}
