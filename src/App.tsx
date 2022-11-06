import { Box, Grid, Heading, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { columnsFixture, IColumns } from './fixtures/columns';
import { GameCard } from './components/GameCard';
import { Header } from './components/Header';
import { IGame } from './fixtures/games';

const onDragEnd = (
  result: DropResult,
  columns: IColumns | undefined,
  setColumns: (columns: IColumns) => void
) => {
  //if there is no destination to drop to early return
  if (!result.destination) return;
  //if there are no columns early return
  if (!columns) return;
  const { source, destination } = result;

  //if the user is attempting to move a card from one area to another
  //Else user is re-ordering with in a given column
  if (source.droppableId !== destination.droppableId) {
    //get the data in the source column
    const sourceColumn = columns[source.droppableId];
    //get the data in the destination column
    const destColumn = columns[destination.droppableId];
    //copy items from source column
    const sourceItems = [...sourceColumn.games];
    //copy items from destination column
    const destItems = [...destColumn.games];
    //remove item from souce
    const [removed] = sourceItems.splice(source.index, 1);
    //insert the removed item into the destination column
    destItems.splice(destination.index, 0, removed);
    //set state to trigger UI re-render and local storage sync
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        games: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        games: destItems,
      },
    });
  } else {
    //get the data in the source column
    const column = columns[source.droppableId];
    //copy the source items
    const copiedItems = [...column.games];
    //remove the moved item from the list
    const [removed] = copiedItems.splice(source.index, 1);
    //re-insert the item into the list at the new location
    copiedItems.splice(destination.index, 0, removed);
    //set state to trigger UI re-render and local storage sync
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        games: copiedItems,
      },
    });
  }
};

function App() {
  const [columns, setColumns] = useState<IColumns | undefined>();
  /**
   * On load check local storage for column data
   *
   * If it exists use that data for the column state
   * Else set the colum info from comlumns.ts
   */
  useEffect(() => {
    const columnsFromStorage = localStorage.getItem('columns');
    if (columnsFromStorage) setColumns(JSON.parse(columnsFromStorage));
    else setColumns(columnsFixture);
  }, []);

  /**
   * Every update to the column state should trigger an update to local storage
   * this will ensure the users choices are carried over between sessions
   */
  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns));
  }, [columns]);
  return (
    <Box>
      <Header
        resetList={() => {
          setColumns(columnsFixture);
        }}
      />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {columns &&
            Object.entries(columns).map(([columnId, column]) => {
              return (
                <Box key={columnId} shadow="md" textAlign="center">
                  <Box backgroundColor={'white'} shadow="md">
                    <Heading as="h2" noOfLines={1}>
                      {column.label}
                    </Heading>
                  </Box>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <Box
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          background={
                            snapshot.isDraggingOver ? 'lightblue' : 'lightgrey'
                          }
                          padding={4}
                          width="100%"
                          height="100%"
                        >
                          {column.games.map((game: IGame, index: number) => {
                            return (
                              <Draggable
                                key={game.id}
                                draggableId={game.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <Flex
                                      flexDirection="column"
                                      alignItems="center"
                                      justifyContent="center"
                                      userSelect="none"
                                      padding={16}
                                      margin="0 0 8px 0"
                                      maxHeight="50px"
                                      backgroundColor={
                                        snapshot.isDragging
                                          ? '#263B4A'
                                          : '#0c5087'
                                      }
                                      color="white"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <GameCard
                                        imageUrl={game.imageUrl}
                                        name={game.name}
                                      />
                                    </Flex>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </Box>
                      );
                    }}
                  </Droppable>
                </Box>
              );
            })}
        </DragDropContext>
      </Grid>
    </Box>
  );
}

export default App;
