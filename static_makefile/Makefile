SRC_PATHS = $(wildcard ../cfiles/*.c)
CC = gcc
OFILES = $(SRC:%.c=%.o)
SRC = $(notdir $(SRC_PATHS))
VPATH = ../cfiles

mainstatic : liblinkedlist.a main.o 
	@$(CC) main.o -L. -llinkedlist -o $@

%.o : %.c 
	@$(CC) -c $< -o $@

LIBFILES = $(filter-out main.o,$(OFILES))

liblinkedlist.a : $(LIBFILES)
	@ ar rcs $@ $^


clear:
	@ rm -f $(OFILES) main liblinkedlist.a 