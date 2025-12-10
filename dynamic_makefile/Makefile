CC = gcc

VPATH = ../cfiles

LDFLAGS = -Wl,-rpath=.

SRC_FILES = $(wildcard ../cfiles/*.c)

SRC = $(notdir $(SRC_FILES))

LIBFILES = $(patsubst %.c, %.o, $(filter-out main.c, $(SRC)))

EXE_NAME = maindynamic

MAINO = main.o

all:$(EXE_NAME)

$(LIBFILES):%.o:%.c 
	@$(CC) -c -fPIC $< -o $@

liblinkedlist.so : $(LIBFILES)
	@$(CC) -shared $^ -o $@

$(MAINO) : main.c 
	@$(CC) -c $< -o $@ 
	
$(EXE_NAME) : liblinkedlist.so $(MAINO)
	@$(CC) $(LDFLAGS) $(MAINO) -L. -llinkedlist -o $@
	
clear :
	@rm -f liblinkedlist.so $(EXE_NAME) $(LIBFILES) $(MAINO)