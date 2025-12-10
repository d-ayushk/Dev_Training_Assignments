cmake_minimum_required(VERSION 3.10)
project(linkedlist C)

include_directories(${CMAKE_SOURCE_DIR}/cfiles)

add_library(linkedlist_static STATIC
    cfiles/linkedlist.c
)

add_library(linkedlist_shared SHARED
    cfiles/linkedlist.c
)

add_executable(main_static cfiles/main.c)
target_link_libraries(main_static linkedlist_static)

add_executable(main_dynamic cfiles/main.c)
target_link_libraries(main_dynamic linkedlist_shared)
