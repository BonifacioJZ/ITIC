<template>
    <div>
        <v-card>
            <v-card-title class="orange white--text headline">
                Maestros
            </v-card-title>
            <v-layout
                justify-space-between
                pa-3>
                    <v-flex xs5>
                        <v-treeview 
                        :active.sync="active"
                        :items="items"
                        :load-children="fetchUsers"
                        :open.sync="open"
                        activatable
                        active-class="primary--text"
                        class="grey lighten-5"
                        open-on-click
                        transition>
                            <template
                             v-slot:prepend="{item, active}">
                                <v-icon
                                    v-if="!item.children"
                                    :color="active ? 'primary':''">
                                    mdi-account
                                </v-icon>
                            </template>
                        </v-treeview>
                    </v-flex>
                    <v-flex
                        d-flex
                        text-xs-center>
                        <v-scroll-y-transition 
                            mode="out-in">
                            <div
                            v-if="!selected"
                            class="title grey--text text--lighten-1 font-weight-light"
                            style="align-self: center;">
                                Selecione un Maestro
                            </div>
                            <v-card
                                v-else
                                :key="selected.id"
                                class="pt-4 mx-auto"
                                flat
                                max-width="400">
                                    <v-card-text>
                                        <v-avatar
                                            size="88">
                                            <v-img
                                                :src="selected.foto"
                                                class="mb-4">
                                            </v-img>
                                        </v-avatar>
                                        <h3 class="headline mb-2">{{ selected.name }} {{selected.apellido_paterno}} {{selected.apellido_materno}}</h3>
                                        <div class="blue--text mb-2" >{{selected.email}}</div>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-layout
                                        tag="v-card-text"
                                        text-xs-left
                                        wrap>
                                        <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Formacion academica</v-flex>
                                        <v-flex>
                                            <ul>
                                                <li
                                                v-for="(item,i) in selected.formacion"
                                                :key="i">
                                                {{item.nombre}} ({{item.abrebiacion}})
                                                </li>
                                            </ul>
                                        </v-flex>
                                    </v-layout>
                            </v-card>
                        </v-scroll-y-transition >
                    </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
const pause = ms => new Promise(resolve => setTimeout(resolve,ms))
import webService from '../../webService.js'
export default {
    name:"Treen",
    data() {
        return {
         active: [],
         open:[],
         users:[]    
        }
    },
    computed:{
        items(){
            return[{
                name:'Maestros',
                children:this.users
                
            }]
        },
        selected(){
            if(!this.active.length) return undefined

            const id = this.active[0]   

            return this.users.find(user => user.id==id)
        }
    },
    methods: {
      async fetchUsers (item){
          await pause(1500)
          return fetch('http://localhost:3000/api/itic/teachers/')
          .then(res => res.json())
          .then(json => (item.children.push(...json)))
          .catch(err => console.warn(err))
      }
    },
}
</script>