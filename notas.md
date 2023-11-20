

# GIT: NOTAS
## Comandos git y su utilidad en el entorno de proyecto:

1. Asegurarte de tener git instalado y el ssh configurado en tu proyecto o a nivel global.
2. `git init ` : Inicia el repositorio en tu proyecto.
3. `.gitignore`: archivo para evitar subir bibliotecas o dependencias a tu proyecto.
4. `git add .` : agrega todos los archivos a tu repositorio de git.
5. `git commit -m "mmmm"` : agrega un comentario a tu repositorio.
6. `git push origin + nombre de rama`: para subir los archivos a la red.
7. `git remote rm origin` : borra el origen.
8. `git checkout -b + más nuevo nombre del branch`: Para agregar una nueva rama o branch
9.  `pull request`: sea desde la plataforma de git o en tu repositorio pull sirve para actualizar la rama que estas trabajando.
10. `git merge`: esto es para fusionar la rama revisada rama principal sea en la plataforma git o en tu propio compu.
11. `git pull main`: para actualizar con la rama principal.
12. `git + nombre de rama + -d` : borra la rama en la que estabas trabajando.
13. `git branch`: para ver en que branch estas.
14. `git switch main`: Para cambiar a la rama main.
15. `git pull main`: para actualizar con la rama main en caso de que alguien ha hecho cambios.
16. 

## Notas para trabajar desde la linea de comando:
- `pwd` : te muestra la carpeta en la que estas: Por ejemplo`cd c`: entra en el disco c, `cd xampp`: entra en el directorio xampp, `cd edwin`: entra en el directorio edwin.
- `cd`: te permite cambiar de directorios:
-  `cd ..` : te permite regresar un nivel para atrás
- `$ tail -f logs/framework.log`: esto te permite ver los log de tu proyecto
- Una manera de usar el bash es iniciar en la carpeta que quieres usar.
- Hay que tener en cuenta que tienes que estar en la carpeta correcta. Porque después de ejecutar el anterior comando te quedas en una carpeta pero no lo vez. Entonces, hay que tener en cuenta que y mirar bien en que carpeta estás ubicado, sabien eso puedes ejecutar cualquier comando.
- `ctrl + flecha arriva o abajo`: Te permite subir o bajar en los comandos que yas ejecutado anteriormente en la consola.
- `git stash`: Guarda los cambios el los commit y te permite cambiar entre directorios. En realidad tiene varias funciones en combinación con otros comandos. 
- `git stash list` que te lista los cambios guardados,
- `git stash show`te muestra los cambios 
- `git stash apply` restaura los diferentes commit
- `git diff`: se utiliza cuando deseas ver las diferencias entre dos ramas. Esto prodría ser la diferencia entre tu entorno de trabajo y tu área de ensayo (git diff por sí mismo), entre tu área de ensayo y tu última confirmación o commit (git diff --staged), o entre dos confirmaciones (git diff master branchB).
- diff ayuda a encontrar diferencias entre los estados de un repositorio/unos archivos. Esto es útil para predecir y evitar conflictos de fusión.
- `git fetch`: descarga commits, archivos y referenicas de un repositorio remoto a tu repositorio local. A diferencia de git pull,
- `git fetch`hace que tu repositorio local se actualice con la última información que hay en el repositorio remoto, pero no hace ninguna transferencia de archivos a tu espacio de trabajo local, sirve para ver si hay algún cambio y si es bueno traerlo a tu repositorio local.
- `git pull` : comprueba si hay cambios en el repositorio remoto y, en caso de que haya, se trae eso archivos a tu repositorio local y tu espacio de trabajo.
- `git checkout + el numero de issue`: este to permite crear un uno branch en git para el issue en la que estas trabajando.
- `git add -p`: agrega todos los cambios a git uno por uno, así te permite revisar cada cambio y aceptar o rechazar el cambio que has hecho antes de hace `git push`.
- `q` : es similar a quiet.
- `git push origin --delete + numero de issue o branch a borrar`: Este comando se usa para borrar un repositorio en particular.
- `git cherry-pick`: es un potente comando que permite que las confirmaciones arbitrarias de Git se elijan por referencia y se añadan al actual HEAD de trabajo. La ejecución de cherry-pick es el acto de elegir una confirmación de una rama y aplicarla a otra. git cherry-pick puede ser útil para deshacer cambios
- `git commit -m`: Para hacer comentarios preferiblemente hacer precios y no más de 75 caracteres. Indicar con precición los que has cambiado.
- `git push ` : se usa en el proyecto git push sin ningún otro ruta de repositorio para subir los cambios al repositorio. cuando ejecutar este comando, diferente empuja a la rama en la que estas trabajando.
- `git rebase` : pone tu branch en un punto determinado del master o de una rama que se ha creado como master en una subrama.
- `git reverts`: te permite volver a un cambio anterior.
- `git rm + nombre del proyecto o rama`:  te permite remover.
- `git reset --hard`: te permite borrar todo en la rama. 
- `git ls`: esto es para mostrarte todo una lista de
- `git rm`: para remover un fichero.
- 
## Camino para comentar y trabajar ocn un fichero en el repositorio local
 - `mkdir + nombre de directorio`: esto es para posicionarse en la carperta del proyecto donde quieres crear tu git y trabajar con ella por ejemplo `mkdir backendTurismo`.
- `ls` : sirve para listar los archivos que hay
- `echo`: crea archivos en git
- `touch + nombre de carpeta` : sirve para crear una nueva carpeta dentro del directorio en la que estas trabajando por ejemplo `touch micarpeta.txt` crea mi carpeta.
- `git add` : agrega la carpeta a master.
- `gi commit -m "..."`: comenta la carpeta.
- `echo datos > fichero.txt`: Esto agrega contenido a la carpeta fichero.txt con la ayuda de la flechita.
- `git log oneline`: te muestra la linea de los cambios o la introduccion in linea de los cambios.
- `echo + mensaje`: agrega un mensaje por ejemplo `echo nuevomensaje > fichero.txt` asi sucesivamente puedes seguir metiendo comentarios al la carpeta
- `git log--oneline`: Crear un fichero
- En git el head o posicion de cabecera es el '_ultimo commit_' insertado el que va en la cabecera de todo los commit, vease figura
![img_1.png](img_1.png)
- 
## Commando git reset para desaser commit y cosas ya hechas
- `git reset --soft` : borra la cabecera (la logica de guardo de git es como en  arrays, entonces hay que contar desde la posicion cero con los commit que se hayan hecho)
- `git reset --soft HEAD~1`: Por ejemplo este comando va borrar el primer commit contando desde master.
- `git reset --soft HEAD~2`:Este va borrar dos commit desde master. 
- `git diff`: te muestra fichero por fichero los cambios que has hecho te permite comparar con el repositorio remoto
- 

## Git bisect: Sirve para recuperar archivos
- 1. `git bisect start`: este te va permitir rastrear cambios buenos y malos y empezaar la funcion bisect para indicar que commit esta bien y que commit esta mal
- 2. `git bisect good`: escribes este comando y en seguida pones el numero del comentario malo para registralo como malo. 
- 3. `git bisect bad`: escribes este comando y pones en seguida el numero del mentario donde funcionaba la app y le indicas con el numero. ambos comando tambien te muestran una lista de los comentarios bueno o malos. 
- El numero de comentario lo encuentras cuando haces un `git log`: cada comentario se muestra con un numero.
- `git bisect reset`:para volver a la rama principal y terminar de hacer el bisect.

## Git blame: Para saber quien ha hecho algo
- `cat`: sirve para ver las carpetas cat + nombre de carpeta o file.
- `cd../+nombre de carpeta`: te permite cambiar de carpeta. Para ir adelante o atras.
-  `rm -rf + nombre de carpeta`: te permite cambiarte a otra carpeta.
- `git blame + nombre de carpeta o comentario`: te permite ver quien ha hecho algun cambio o modificacion.
- `git blame --help`: para ver mas sobre este comando en internet.
- 
## Ramas: La rama principal se llama master
 '_Cuando inicies un proyecto tienes que hacer obligatoriamente un comentario commit en la rama principal, sino no va crear ramas o va dar problemas_'
- `git branch`: te muestra la rama
- `git branch + nombre de rama` : asi para crear una rama. 
- `git checkout + nombre de rama`: Esto es para cambiar de rama en rama. Te vas al nombre de rama que le vaya a poner.
- `git checkout -b + nombre de rama`: Esto crea una rama desde master, toma como referencia la rama master
- `git log --oneline --graph`: te permite visualizar los cambios de la rama en la que estas trabajando y --graph lo presenta de manera visual.
- `git branch + nombre + numero`: Esto te permite crear un una rama desde un punto de commit por ejemplo asi: '_git branch desde_un_commit f6f992e_'
- `git checkout -b + nueva rama + nombre de rama ya existente`: esto es para crear una rama desde otra rama: Primero hay que poner el nombre de la nueva rama que quieres abrir, y luego el nombre de la rama donde quieres crear.  ejemplo '_git checkout -b rodriguez edwin_'

## git pull 
- `origin`: es el repositorio remoto en cualquiera plataforma
- `git pull origin + nombre de la rama`: esto es para actualizar tu repositorio local con los cambios que pudieron haber en el repositorio remoto. 

## Git marge:
Es para fusionar ramas. 
La manera de hacer merge de fast-forward _fast-foward_ es cuando no hay cambios en la rama principal y entonces git muenta todo la rama que se esta uniendo de manera continua
La manera de hacer merge con recursiva: Es cuando hay cambios también en la rama principal entonces hace el merge en al 'ultimo commit' y se hacer iguail `git merge ....` y al final se genera un commit para hacer eso. 

- `git merge + mas nombre de rama`: hay que poner en la rama donde quieres fusionar y luego ejecutar el comando merge + mas el nombre de la rama a fusionar.
- `git merge + mas nombre de rama a fusionar`: no siempre se puede fusionar con master, sino tambien entre ramas que no son master bajo la misma logica.
- `rm rf * .git`:Esto es para hacer un borrado completo y tambien la carpeta git.

## Git rebase:
- `git rebase + nombre de rama`: hay que volver a master o la rama donde quieres hacer el rebase y luego ejecutar el comando rebase + nombre de la rama por ejemplo: si estoy en maste y voy a rebasear a master la tercera rama: _git rebase tercera_
- Rebase funciona como merge con la unica diferencia de que los une linealmente todo los commit y borra el anterior. Esto se usa solo si trabajas en tu repo local. En origin normalmente es merge.

## git stash
Esto sirve para dejar un repositorio en blanco. Si trabajas en un proyecto y por una u otra razon tienes que trabajar en otra rama y tu no quieres perder lo que ya has avanzado pero tampoco estas listo para hacer un commit, haces un stash para dejarlo en el estado en que esta y m'as tarde volver a ella. Es como decir que es un mundo paralelo 
- `ls -altr`: te da toda la lista de cambios que hay en el proyecto.
- `git stash`: este va poner en pauza la rama o lo que estas haciendo y te entrega un repo limpio. Y cuando termians con lo que tienes que hacer haces un `git stash apply` para volver a tu rama que estabas trabajando
- `git stash apply`: Esto te permite volver al tu stash y terminar de trabajar.
- `git stash list`: esto es para ver la lista de stash que tienes. Luego para volver a trabajar hay que trabajar por el numero que te da la lista
- `git stash clear` :para volver a trabajar en tu estas tienes que entrar a tu stash y limpiar con el comando git stash clear.
- `git stash save  + nombre`: te permite guardar tu stage con un nombre _git stash save trabajando en formularios_
- `git stash pop`: te muestra los trabajos pendientes que tienes

## Cherry-pick
Sirve para fusionar o mezclar commit , funciona como merge pero por commit.  
- `git cherry-pick + mas numero del commit que se muestra en git log`: Te ubicas en la rama que quieres poner el commit de otra rama y ejecutas el cherry-pick + numero 
- `git cherry-pick + numero de commit + mas numero de comit`: Esto para recoger mas de un commit
- `git cherry-pick + numero ^.. +numero` para intervalos de commit

# Work flow en git 
Este es work flow normal como se trabaja en git.
update -> change -> review -> commit 

## git fork (working work flow)
Es cuando haces una copia de un repositorio de otra persona en tu propio repositorio, tambien se puede entender como clonar.  Si quieres contribuir al repositorio de otra persona pero no tienes permiso, entoces haces un fork
- `para salir de vin modus `: presionar la tecla esc y luego ingres :qw
1. Ir a git hub y forkear el repositorio de otra cuenta en tu propia cuenta.
2. Una vez que tengo una copia o fork de repositorio externo, hago un `git clone` en mi repositorio local o computadora que es igual (o carpeta)
3. Hago las modificaciones necesarias y lo vuelvo a subir a mi propio repositorio remoto con los cambios.
4. Luego en mi repositorio remoto hago un `pull request` en el botton _contribute_ de git hub justo encima del comparing changes.para decirle al administrador del repositorio que esos son mis cambios y mi contribucion
5. Luego hay que hacer un comentario y luego hacer el _create oull request_
6. El administrador de repositorio ahora puede ver y revisar y si esta de acuerdo puede hacer un marge request. Esto agrega el commit a su repositorio principal.


## Server side or remoto side 
Esto para evitar arruinar todo. Se trabaja con hooks. Esto esta ubicado dentro mi repositorio en la carpete git. 
 - `cd.. o cd `:para navegar al la carpeta git 
 - `ls -al` : para mostrar todo la lista de carpetas que hay adentro
 - no acepta texto con Ñ o ñ git commit.

# SOLUCION DE CONFLICTOS
Los conflictos surgen cuando modificas el mismo fichero en dos ramas distintas, y al momento de fusionar con el master va tirar un conflicto.
1. cuando hay conflictos, hay que ver con _git status_ y nos mostrara el conflicto
2. Para resolver el conflicto hay que editar el archivo donde que hay conflicto manualmente.  
3. Luego entramos a editar el archivo y nos motrara los cambios en cada rama con <<<<< ese simbolo y ========= este simbolo en la otra rama. 
4. Borramos manualmente 
5. Para ello ponemos `set nu` y empezamos a borrar (esc y luego `:set nu` y luego salen numeros para borrar las lineas) y hay que eligir con cual d elos cmabios te vas a quedar.
6. Luego volver a master y agregar el archivo a git 
7. Luego hacer el commit en master 
8. Luego hacer los merge que hay que hacer 
9. Esto funciona tambien igual cuando trabajas con distintos repositorios. El mismo mecanismo hay que seguir.

- `git pull` Para evitar conflictos siempre hay que hacer un git pull para actualizar la arma. 
- `git merge --abort`: para abortar un proceso en merge

## MANEJO DE HISTORIAL O CAMBIOS
- `git log --branches="*"`: Esto te permite ver todo los cambios en todas las ramas.
- `git log --branches="mas nombre de rama"`: esto te merite ver los cambios en la rama
- `git checkout + numero de commit`: El checkout commit es para volver aa un punto anterior de nuestras confirmaciones y ahí crear una rama.  Cuando haces lo unico que haces es desligar de la rama y lo haces huerfano y no puedes trabajar en ella. Pero si hace una rama y haces el pull ahi estara siempre en main, entonces recuperar ahi el commit y puedes trabajar en otra nueva rama que sera como crear una rama en el pasado para trabajar ese commit.
Si hacemos mommit sobre un commit con checkout no si guarden, no sirven para nada y se van a perder en el aire. Por eso hay que crear una nueva rama. 
- `git switch -c <new-branch-name>`:If you want to create a new branch to retain commits you create, you may
  do so 
- el detached HEAD es como el basurero de git que elimina cuando se ejecute esta opcion
- *GIT REVER*  revierte el commit.
- `git revert + numero de commit`: borra el commit. Se pueden hacer multiples commit al mismo tiempo y los numeros deben ser ingresados de manera reversa. El revert no elimina sino sobre escribe como si fue una eliminacion. Esto lo que hace es revertir el cambio con una confirmacion.
- *COMMIT AMEND* : podemos modificar los cambios del ultimo commit

`git commit --amend`: Esto es para modificar el ultimo commit.

*GIT CLEAN* Sirve para hacer limpieza

- `git clean` para limpiar
- `git clean edwin -f` para forzar borrado
- `git clean -i`: modo interactivo (que borramos y que no borramos)

*GIT RESET* : Te permite machacar borrar 
Reset tiene tres opciones: 
--soft -> para volver una 
--mixed --> Stage area
--hard --> que trabaja en el repositorio

Esto coincide con los tres arboles de git: 
1. HEAD = 'ultimo commit o de cabecera
2. STAGE AREA: Son los que aun no estan commiteados
3. REPO --> HARD: trabaja en el repositorio

- `git reset --hard`: Te vuelve todo tus cambios que has trabajando al estado que estaba en el ultimo pull.
- `git reset --hard + numero de commit`: Destruye todo los commit que has hecho desde ese commit en adelante
- `git reset`: Asi a secas lo que hace es eliminar todo lo que esta en stage area pero no esta confirmado o comentado. Tambien elimina aquellos mensajes que aun no han sido comiteados. Pero no lo elimina del todo. Solo lo saca de este area. O en todo caso sacas el trazado del git.
- `git reset --soft`: te mueve como el git a un punto del mensaje pero no se usa nunca.
- cuando haces con reset con la `d` lo borra y la `D` modifica.

*GIT CLEAN*
- `git rm + numero de mensaje`: Esto no borra por completo el archivo, es un error borrar asi. Primero hay que remover el mensaje de esta manera, luego hay hacer el commit y tambien actualizar en el repositorio remoto. Recien se borra.
1. `git rm + numero de commit`:
2. `git commit -m "" borrar mas el nombre del archivo y el numero y comitearlo"`

# GIT FLOW
- `git init`
- `git flow`: te muestra todas las ramas que normalmente se usa en git flow.
- `exit`: es para salir
- `git flow init`: Para empezar hay que hacer un git flow init en tu carpeta principal
- luego darle enter enter para crear las ramas por defecto
- `git flow feature start + nombre por ejemplo [feature_login]`: Asi cambias de rama en git flow y te va decir que trabajes ahi. aces tus codigos y carpetas y cuando termines tienes te terminar con el siguiente comando.
- `git flow feature finish + [feature_login]`: Este comando te va preguntar que hagas un merge automatico
- Cuando vas a empezar a trabajar en una nueva rama, entonces crear una nueva rama que se va llamar por ejemplo `git flow release start 1.0`
 - `git flow release start 1.0`: Para empezar a trabajar con una nueva version de la rama. Y luego el mismo procedimiento para trabajar y hacer
 - `git flow realese finish 1.0`: Y este se hacer una funsion main.
 - `git flow hotfix start + nombre poe ejemplo  'hotfix_1'`: Esto es para resolver problema en caso que hay problemas despues de realease.
 - Y otra vez `git flow finish + nombre ;` E igual que el anterior nos va preguntar por hacer el merge en main, y luego en produccion. Esto es mas o menos el mecanismo. 
 - Este mismo proceso se puede trabajar tambien con los comandos normales en base checkout y cambiar y hacer merge manualmente.

# INTEGRACION CONTINUA : CI
Es cuando se integra continuamente. Pero tiene que estar construido en un control de versiones con alguna herramienta or ejemplo[GIT, SVN].
- Cada x tiempo verificamos cada cambios 
- Para ello mi codigo debe estar en un repositorio de manera versionada.

# ENTREGA CONTINUA. :Continuos delivery CD
Esto significa que nosotros vamos a pasar rapidamente nuestros codigos a la rama de production. Pero el este modelo los cambios tienen que ser pequeñitos y no como en git flow grandes. 






































