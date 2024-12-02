# files

_All my notes about the interaction with files._

## open file

_k_ by itself seems to be very strange with operating with files.

The straight forward version of loading a file is:

```k
0: f
```

Here `0:` is the opening file and `f` is the file, here an atom, a string or an string vector.

### files as fields

> [!WARNING]
> While this should be possible in k, it seems like Kona is not able to do this,
> so loading a normal file and then parsing it is still the better way to do it.

To directly parse certain files, you need to prepend the `0:` with an two item list:

```k
(s;w) 0:f
```

The Argument `s` stands for an character vector that describes the character vector and the second argument the integer vector.

To loads a `csv` file we would need to do, assuming we have file `file.csv`:

```csv
Name,Game
Iudex Gundyr,Dark Souls III
High Lord Wolnir,Dark Souls III
Gravelord Nito,Dark Souls
Seath -- the Scaleless,Dark Souls
Gwyn -- Lord of Cynder,Dark Souls
Old King Allant,Demon Souls
Rom,Bloodborne
Genichiri Ashina,Sekiro

```

and the _k_ file `csv.k`:

```k
("CC";",") 0: "file.csv"
```

it should print:

```
(`Name `Game
 ((
   "Iudex Gundyr"

   "High Lord Wolnir"

   "Gravelord Nito"

   "Seath -- the Scaleless"

   "Gwyn -- Lord of Cynder"

   "Old King Allant"

   "Rom"

   "Genichiri Ashina"
)
  (
   "Dark Souls III"

   "Dark Souls III"

   "Dark Souls"

   "Dark Souls"

   "Dark Souls"

   "Demon Souls"

   "Bloodborne"

   "Sekiro"
)))
```

> [!NOTE]
> While [kona](https://github.com/kevinlawler/kona) _should_ be able to parse the file correctly...
> it does appear as it is not able to do this correctly.
> I _will maybe_ look into the sourcecode and try to fix the bug.
