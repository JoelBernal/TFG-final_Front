<template>
    <div>
      <Navbar />
  
      
      <v-container style="margin-top: 55px;">
        <v-row>
          <v-col class="text-center">
            <h1>Acerca de nosotros</h1>
          </v-col>
        </v-row>
  
        <v-row justify="center" style="margin-bottom: 20px;">
          <v-col md="4">
            <v-img :src="aboutUsImage" max-height="500" contain></v-img>
          </v-col>
  
          <v-col md="8">
            <p  style="margin-right: 300px;"><b>
              Bienvenido a nuestra librería, donde cada página te lleva a un viaje inolvidable. Fundada hace más de una
              década, hemos trabajado incansablemente para proporcionar a nuestros lectores acceso a miles de libros de
              calidad y a una amplia gama de géneros.
  
              En nuestra librería, creemos que cada libro tiene una historia única que contar y que cada lector tiene su
              propio libro destinado a ser descubierto. Hemos alimentado las mentes y los corazones de los lectores durante
              años y nos sentimos honrados de seguir siendo el destino preferido para los entusiastas de los libros.
  
              Como una librería de renombre, entendemos el valor de la calidad. Por eso, nos esforzamos en proporcionar no
              solo una amplia selección de libros, sino también un excelente servicio al cliente. Nuestro personal amable y
              bien informado está siempre dispuesto a ayudarte a encontrar tu próximo libro favorito o a responder cualquier
              pregunta que puedas tener.
  
              Pero nuestra librería es más que solo un lugar para comprar libros. Es un punto de encuentro para los amantes
              de los libros, un lugar donde se pueden compartir ideas y descubrir nuevas perspectivas. Ya sea que estés
              buscando la última novela de ficción, una guía de autoayuda inspiradora, un libro de cocina tentador o un
              misterio emocionante, lo encontrarás aquí.
  
              Te invitamos a explorar nuestra librería, a sumergirte en las páginas de un libro y a descubrir el placer de
              la lectura. En cada estante, en cada esquina, hay una aventura esperando. Estamos aquí para ayudarte a
              encontrarla.
  
              Gracias por elegirnos como tu librería de confianza. ¡Esperamos verte pronto!
            </b>
            </p>
  
          </v-col>
        </v-row>
  
        <!-- Sección del equipo -->
        <v-row justify="center">
          <v-col class="text-center">
            <h2>Nuestro equipo</h2>
          </v-col>
        </v-row>
  
        <v-row justify="center">
          <!-- Ejemplo de tarjeta de miembro del equipo -->
          <v-col md="4" class="text-center">
            <v-card>
              <v-img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUZGBgaGBoYGBoYGBgZGBoaGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQkJSs0NDQ2NDQ0NDQ3NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABBEAABAwIEAwUGAwYFAwUAAAABAAIRAyEEBRIxBkFREyJhcYEHMkKRobEUcsEVI1JigvAzNLPR4UNzklN0ssLx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACkRAAICAgIBAwQBBQAAAAAAAAABAhEDIRIxQQQiYRMyUXFCIzOBobH/2gAMAwEAAhEDEQA/AOrbKniTJAClqVFDTEvSy3oK0WMNQ2RBoTabIUiZKhW7GQnEpL1wWMVapuvCxRvfdPDkqCyekFK4qGm1Pcm8APWhSKJhXtSoGiXEAdSYCxiReIHjeKcNT3qaj0aCfrsgGI9ojASGUhAEkufsOpAED5peSHUX+DepLk2J9rmkkNoteZ2aXAerj49JQrE+2PFfBhqLPzue/wCxamWxXo7akuH4b2y4kHv4eg8fyOew/Ml32W34c9puDxJax5OHqG2mp7hP8tQW/wDLSfBagWbpJJJYIkkkljCSSSWMJJJJYwkkkljA5JJJYxQc+YCt4enBlUcAZI8AijQlQJE7HWUiYwWXrynBR61evNkymU5xQCD3jvKy0JpavGuQCWWlNxFZrWlznBoG5NlBWxLWML3Gw+fkPFc4z7iF9V5HwiwbeBfnf6qc8iivkeGNy/Ros14wDe7SF/4nD7BYbOuIXuJLnknp0Noty52CzuZ54dWil33usXDlHJv6k/SFTa8svr1PMy8XDLE6WTubb79Ii8vdLbLrjHSL2PzEjunvONtLTJHLvO+H+9kLxVgHV3DmW022aOYBjmnduKdmC9pJh0wOX99dlSwuBdXqTUdDA4MLpAlx+BpNh1LjIaLmZANIqvgFOTSStvweUu0rnTRYGtmJJsOcFx5wDa5RzD8OU2hgqlry9ocH6iaZJmWNLXDTp2MybGBsEZoYBtMMazVRc1j9D2uL2PDRo1hzW7OMAnQ33tWo2agud522i3sqYaXFvf0ueaYOomAxziLGfO52dBa23SOtYsOGPKe3+C5UbhKbdTqVINuWS1r4LBpNNxF3NJ2fN5ncQqGKxuXOP+GNMaoa1zDLhBpuc2AQ0yQ6DMx4rI18S551OcSfEm3l0ChlNGLXbOefqlJvjBJfo6nwzx07BuZTbWOJw5mabrVacwYpvdE3J7rrd2xErtGWZhTr021aTg5jtjzBFi1wNw4GQQbgr5ElbDgjjmtgKn/q0Xkdowkz01sM2eBa9iBHQhzlk03dUfTKSGZHnNHF0W1qDw5h/wDJp5tcORHRE0BRJJJLGEkkksYSSSSxgckkksYGZURcoqKghZzKWOA80YZTJ3KgshV4wkx4UVarCiY2AmVRdZ5Gb6aJqVYL19ZV2M5J1UgIc5DcEQ1sYBzVf9otCEY6vL3AIZmuO7KmXk35fqUrm0FQTI+Ls/1dxhECdid9iYhc5zXHu/wmSXuBDo6/wenP5GN1YxGZSH1SZAMMHVzrjzixjy3uhT2aDBJNV4Gv+UH4N7mYMz+iEU2+UikqS4xFQpCnIBl/xvHjHcYf4eU8/IheOPM7SSByN/Hy+kHqrOGoSCSfTmPTYyD9Y5qB5BMjkPzEWgnxMAeYHVUTtiVSKugnmR8ztvHWI23tN1doY59JuhsR3i5pax4vGod4EwS1p3vqnlaU09DSSRqtc3FgCI6i7Y6teZWfxuOkkNsLjxibD5Bo/pTR2BvhvyHc04hhjqVJpphxdr0u1WmQ1riPcBJgeLjJmVnCwvggSTNgL9f+fmlhaeqAOZiPO0hXmt06hyAHnc2M/NHUdIDcsj5Sdg3RBPgCo4V9lBsAudBO1hG4EuJi10qtAEmHh3S2kCBtzby6p0yUo0VhS22kxbmJ2le9iJInYkfJTYWi4O1CLXE8iNiBzIKbiKomAAIt68z8yinszWjTcFcQ1MBXD2kGm6BVZMh7ZiYGzxcj/Yr6NwWIFRjXiNLgHNggy0iWmRa4uvkylUMrufsw4kY/DMw+o66Ut934dRLQL9DGw2WYKOlJKqMW3ql+Lb1CFmospKv+Kb1Cd+Jb1WsBOkoPxLeqRxLeqJiqkoPxLeqSxgbgqjQJnkrgxrQd90Gw1OW+ihq1A1y4kzsaD1XM2AbqnTzTXcBAMViDyVzLKZLAUbBQVq5lpEodic4cbBR5o/SIVWhg3PuTCMWgNComd+qw/tFzM6hRbMxEDnJFlvux0G65Ti/3mYOL9manOm8aLiB5wstyt/sZ6jr9DcU0UGs70lgIZPN5998dAbDyHS0GV4UvdqdPPxJnwUTi7E1SRMTtyaJ2AWgDBSZHWx5WHiNot57LSlSryCKt34KeOeB3GnblO8dOZ2HnJjkn4Oi0NL3ghoE2AmbukWuYk+JDOq9w+FL363A6QfmZA9B5foFS4mzMNGhkW5jmd3OA84jwa081o70jSdbYHznMNbiBYdBsN7Dwub8wQOSFMYSvAJRXJ8KHuLT0n5bfWB6rp1FHOrlIO8EZV2xeA0FzCx5Ed7SZDi3yjbxCLZjkzKbXGqC3SY1tmIBgFzY94kxMG5tvKj4Lqfha79boDmiw+Ikd07bgONv5wtPndfD4lr2lwD2SSJlruTbA3iG/ONxblyOXO10deOlGmcqzB7RpDC46SZJ573ve4ix6lDpI2MLRZzSl50Bulog6TblJaDe8g89xyQSrTgmPBXjLRGcd2M7Z3ifIkC/OxVaVK8XUUKiZKSY8OWu9nefNw2JOstDKgDHOc7SGXlriTyndY1eg3siBM+jv21h3nuVWvAF3MOponkC2ZPgJVii7WNQkDlO/nHJcn4Mxj6paw1wyHC2jU93KQ90hsdfouuUGNY2LmwkkyfVZNj6o8LI5n5qliKzgfeKIue1Bsxf0TW0NGKbJBiXH4j81A/GOB98/NMoPEXVXFvbKaOzSikO/aB/iKSFds1JNQlI3VEAMHkhmKILxGwCm1u0xsqDnkFeXHs6XoRpiUewlCGBA6Al4lHWVQBumaoVMEZq7vAK9h3ANHkhGPqhxcfkosO9wAElNGDYHJIIY/ECRC5zxTgRTc+oPeqnumLhvvOj1038Ft6jCVnOLMOX9n0DTuejtvshJcaY0XyQM4cwUMfVdv1iLnc2t/wDqhxep74BJ5QBe239+E8loTRLMMyN3F2wncwPOxVCnS0DW71Ejc9J2NjPgoqVybKtUqK+JqtoUbGSALxYyJMDlcEA9BPJc8xFUucSeZ/uyM8TZiXv0zYC0bR+oi3p5oVl9HU9o8V14o8VbOXI+UqQawWRF7WuG/wB0Qp5QWQGNdr5m4i9wRzBt8ltcoy6GNt0U2MpFsnShKTOiOON0YXF5e8nW94BEGTuIECDNuXyQyvhWG/bHVaCAY2jr0hGs5FQkkMkjbV7o8Y5lBstw5fWiu7QyCXEnSPdMaSOcxZBW1bYZKKdVZROAd8Lw4eFvorWX4PvgVA4iDsYJsYv0lSvpBjyGO1N5H+90WwAPNK5yrRo442DcRlHecAO7MgzceB8tkCxdLSSFs80rljC4CTtflPMlZeg51V+hoBcdrCDaY+6GKUnbfRs0IqkuwWWrwNWrybKxia1Og5ul7qrWEARaZebdGBx9Eeo+zeo3GOouIFMVIY5wd3mOa4sc3k6HaWuEyJBghXU1RyyhToP+zbhDQwV6jD2jhLbkAMPukAGDK6B+zXnorfD+Wfh6DKUzoBaDM2kkD02RWEVdWJKSvQAGUO6j5KvicgMWdfyWnheEJt/kykYcZOQbqHEZPO62GIpiVGaQRjN2UlTjaOf/ALHHRJa3sgkn5kwBj8wa1qEMzIO2WRzHMXueZKJZIC5cqxceyjyctI0DsWW94KvWzl8EBOrU4ahOJbAVFFPsFse/MXHcwEWwGKkbrG4h5mETy3EFqvFRojLlZrH1VWxuHFRhHNp1A/dD6mMmyJ5ZVm65c8b0XxNp2VcczuUx/KZA8+qy3EmYaGOa2L2IgetvRbXNcPLAR8JdztETdcs4gqGpVDGjvEgR5gdVy4o++n4OicvbryAmsLiTvuVpOCMlfiK4a1swJcf4RffpsVPw9lhLXNc0hzXQZG4OxH1XY/ZzkraGHLg0AvcTYXIaSAT9V1OTdpEnj4JSYay7JmUmgRqdG5/RDM9wo0mBF+QWqIQDOzZJLRsMnKWzBYnCA2QjE5aOQHyWoe2So3URzU3s9CMaRi3ZO8mwhGMBk9hKLOI6WVilWaniTnGtgvMsra5haRuCCshl+Uvpv1Nhr2yJIkdNtpXRsS0kWEwqZwgPeAuTfzUsrcXorCEZRTkecAcOubjG4h0HTTeXGPje4AR46Q/5rrMLJ8KnSxwP8Q+y1DKoK6MT9qs8v1EayOiZJeApSrWQEkm6gmPrADdBzS8hpkGJN1HKp1saHOsU41xCSMrZ08GobKmtJU+1CSoQORY2l3/VaTh2gpcTlEmYRLK6AY2FCWZS6Hjjaex2KZYoJjKdkcxdYbKu+jLUynSNxdmUOFkohhcGeitPohpRTAhqzzUZRbZVpZdPJXcPR0BEqZbCZVcEv1Ux+LKmIq/uqh6AH9FynK8wYMZqeBpcdIOwbsA7ytddLzerpw1d0/ANvNckyjDuqYhjWguJcAALndKkm2/gdNqv2dho5e41Gam2dEHkQdjK6XhqIYxrW7AABZPhvJsRSDWvIcwgd1xJLLfD08tls1sMXTs3q8nNpL/QxxQzH0ZDvy2/3RJxVXENkHyRlsjjbi7MTVplpvuqtZt0czOiAABysTz9fFZrHYwNkTYbnmT0CSR6kJXsr4+oQwkCYQ6vxNTptbppF7/iA3B57lWX4rVyQrEYMuM6Pp+q0VXY0ly6CGA4kdWLgWuZEd0gQQejgjmEqFzZ67LD4VzmuLSCIPQjb9Ft8DUDmAjoFKdt2Uh7Y0THOm0ToO5h36fop6vFDw3uC/isTjsVrqvdNtUDyFh9ArDMRZd0ElFJo8TLJym2ayjxs5vvMnyK9xPtEaGmGHVyE2WKrVghOLKPGL8E7aNDifaBiXEw5rR4N/5VB/F1d/vPcVniV5CV4l+BlNo2+UcSOHvXRmrxPbZc3oVSFYOJcUnBp2i/1m48Waj9vP6hJZDtCvU1SJaOj4zHsHNCaucNbKxWIzh7uahGKc5Sj6eux5ZV4NTQzLW4o8zEjRKwGDcQblaLC4sRCeUH4NGSFmOOg2UGHzvTun4ujrEoDiqUJoxi1TElJxdo1FPiBPfnwWKY9PLySAJJNgBuSdgAj9GIPqyNeceKzH0eb2EN8xcD6K77E8iAdWxD294HQyRtBOtw8ZgehWXbkuLovY59Cowam94tIiT15eq7nkGCFKm1oaG2kgRu65PqZ+ak1waS6Y/LlFt9hZwTknKMPBVW1Ej2MquhQE2KlqiVWvdc8pbLRWgLnNOGl2wbc+LjCwWYOcWjSJO5kkXN7rpGYUdbHN6iPVYjHU+zOkhInbPQwu40ZKrj8S06dBA/lc37qu7HPvrafEF1/wDlHsXUY7wP6oVUYNnCfFNJxOvGvmmR4TN2g6SS0+c7rQUcU1lJ7wRdpAj+ImBH3QvAYFrnSGD1ClzioGxTGwOo/KAPv80sEpSSQvqpcMbt2wY58JhxSmDJ5Jv4bwXfSPApkPbErxwlWew8FOymtaMosCvpmdl6ymeiMnCrx9EBDkNxBjaSmZR8FK+sAmtxIWsFEPZeCSk7YLxY1AinhwrrGABUHYto8U04wnay2zWkXqlQBSYHGjWBuglR5O5VvKqRc8dOqMtI0eza4Z+seCC5qzdG8uoEBDM1Z3T5qEJXKi8o+0zbXLXezOk1+YUg4A6Q97Qf4mtOn1Fz6LHArZ8E8PYv8TSrdjUpsYdZe9jmCIIgaoJkGLcl0N0jnSt0dzr0GvEOAIUZY5twdQjbY22g80JObOb0cPGx+YVnC55TeQ091x2B2PkdlByjIs8OSKurRap49jrTBFiDYg9FQxWL0GTtzT8xwIfPwu5OHToeoWZxLnCWOkObuJnyg8wp5E/JTDCMjV4fFtdsQntAlc0xWLfScHMcWuvz9b9dlbwfG72wHsa7qQS0+J5qNlJ4K6OhGkINlheKMG7XrO21hf1R3K+L8NWIZr0POwfaT4O2Km4hozTd4CfNFtGwylGdM5zUwvgoDgiegVg4oA7mxvO6cKoJBm31SSo9GMr7FTYKbS42gEn0WWfi9bi47kyjHE2ODKekbvt6buv8h6rItqrq9LCk5fk8712W5KK8Gkw1UQrZcIWZo4qFdZipV3E41ILOcEmPCotrp7Ki1BTL4qKnjqtlNTKZimWSj+DN18SZXlPElS4mldVXNRQjLH4opKjqXqahbKylpsJVinheqsNYAs2ZRIqeFHO6KZYAHhDqlcN5qu3GuLhFkkk2hotJnRqFQAR1VRuUvxNQUaYu43Pwsbzc7wCo8LUX16zaTbucdzsALlx8AF27Jsmp4dmlgubucfecfHw8FPHGmUyT0Z/hTgOhg4qOArVw4uFQtIDeQDGSQ03N97+i2HaD++XmnOKpYgBx2cDBhzbEeR5+WyujnFi8vp1N2ieosfmFiM8yLEU5LB2rLmR7wF5BbztzHyVt/FjmVGs7N1SdeuIbUDaYvUAA0uaSWjdvgCieX8SU6ztB1MfE6Ht0PjqGm5HiLXRyembVtHR6b1s8UtbX4Zgcs47dh3BryX0ttB99kW7p8P4T9FtsexmJpNrUHh9iWOabOE3afGR6FAePOD212ur0WgV2iXNEAVAN7fx9Dz2PKMb7P+KPw1Xsqjv3FQgEk2Y7YPHQHZ3oeS5uNLjI9CcoZv6uJU/KD2OdqEix2P6hAa7TPQeP3W44oy/Q7tWCzjDxyBOzvVZupSm4suOTcZUykanG0BK1OR1hEMv4jxVIaWv1tFtFTvjyB94ehhJ1OeUddksLhZPj4rOehPp2wfmWNdep2egcxrLhJ6SJHkhP7ecPdZB8TKIcWvhzKY5DWfMyB9J+azhC7MOKMoqUkcWfNKMnGLHYnEPe7U8yft4AckwLwleF66kklSONtt2yZqnY6FS7VemsiAICurFCqgvaq3hqiA6ZoqNVSVKllQwz1ZebJGh0wdiYlUKwV6vuqOIWBIqJLyUkRAhVrBouVRqYonayq65XsLJBchEypKLe8PNeNYukey3g416jcXVb+4Y6aYP/AFKjTYx/A0/MgDkUX0Kb32d8MfhaPaPH76qAXSLsZu1nnzPj5LZyvConuAtzSJUFuxF6ie8Dcb+CfuvHNTAOc8c4jRVOgGXUy15DZ0gubol0c4NpG6zjs1116GtxAe+qwOB0hjwxnZvbBPxAA7iCRBuun59gmuoVCWyXAAxue8Of9+qwfEeS6gwMbDxX0tM7P7EuB94i7mMH9S7IzUopMlxalZrcozPXDHluuBDm7OtJHg7e17cyuae0nh78PW7dg/d1SSQBZj93Dyddw/q6IvhsU4sDyIeNLKjRvrbs/qHRPyWodox+GqUH2cWgaotq3Y9vWHC48COa58+GlaOv0ubjIHcDZsMZgzRe6alMaHTuWEdx/ibR5t8UOfRc0uY7dpIPoslwfmTsHjAH91pcaNYHYDVBJ/K4A+hXUuIcB/1WjlD/ANHfp8l5uaHKNrtHpwax5K8PaMbWH98k/CVIPegACSeUBTVaMnyWV4mx2k9i0naX+uzVDFFzdD5sixxtgrOMd2tZ75kEw38osFQc4pQloK9VUlSPDlJybbIySoyCrlOhKuMwK1mSAwplTU6BKLfglKzDALWNQJ/Dqai2FcxEBUu0Eom6C2GVx+yGYasiGuyNGspVhdU67VeqkKpiTZCjMoaF6kksArNavQmdomuKwDQcJZM7GYqnhxMOOqoR8NNt3u+wHi4L6Ww9FtNjWNAaxjQ1oGwa0QB8gsD7H+HOwwv4l4IqYgBwn4aTSdA/qku9W9Ft8RLrfD06+JQMRNxvaktpnuixeL36N6qxhsMGDmSdydz5p+GohogCPDkPIJmJxbGWLr9Ab+vQI96RiVItVM4tzh3B68vEz/shuaZiaTqbXOLnVKjGNbZoAc7vOJ5kAEwI/VFQbdAbSVhbFNGkAiRMkWO17zusi+s3tWMEd4VKxj4RDWMG3Ma9hyKOZhmLXM0tdAc80yQQC3TJfPMQAdr2WQyzHNrOfiGktY/uMMO1ClSJawjpMufP83qqwi62C1ZLi8vY57y0QXDvDr0ePGR6/NZvL8S/DvLxd1PUS0TLm/E2J6QefzhbUAxyMbEXMf2FluKsOWPbUbadzuQRYGCPGJVU79rM1/JAT2i4BrnsxtK9Ou0aiOVRovPm0fNpW/4GzcYnBsLrvpjsnzeSwCD4y0tPmSsHVYRRdSdfD1pLLE9jXnu3+FkgiehLeit+yyq9mIr4d0iaesj+Zjg2R5h5vzAC4ckOEvhnoxmsuL5X/AnxU4YVziBIIlg87R6EFc1exz3F7rlxk+q6D7U3HtMM2LFlQ+EhzB/9vqsjRpJMWJRtryc+bLKdJ+CizCpzsMiTWJlQKzRFIqUKcFEWgQqrWqUvgJRj1ygrVIXlSsEPxNdYzZDiqyodoVI8yo9CYQs4evCKU8VZA2tVhjyjZghUrqF7pVeSruGoFyVsdbJfw7UlY7ApJOQeLMsCj3BmQnHYunh76CddUj4abLuvykw0eLlnivo3gPhpmX4VpcB29QNdWceRN2sHQNmI5meqcmbAMDQGgQAIHQACAguY55ToktHef8gJMC5tuhfEGf2LKZJv3uXdEzLjsNrrGMqvc8mAS0SA0ySIMGPILow4OW5Ep5OOkbXGcTd2B7/MCRAE3B8UPyvDVK73EzBtP8IHnzBn1Co5fl76r4AvEAA7TNySOQ+/gF0DL8C2gwNFzzPU/wCyefDEqj2xY8pvfQ5jG0mAcgue+0fH9liMHUIkgufomGwyDBPmUc4w4kZhWFwAqVCYa2YDQRdx67fZcoz3MqmJqh9XUXNGmGjVGsyGNGwOkeF0fT4pXyfRss1XHyR4nM6ulz9VQBtN4Ac7uaqztJcxrRAkvcSSTPXkjXCmIaym0v0hsaA4wNN7NceYJm3ms1Xbrc1ul5c97iQ9/aVIpsJu6I3cDA6IlkTwO6YLTYyDE6gbt52XVSpsne0jeYXFxse6SbQW+OzgDceCkzPDCtQcBuWyPAx4IHQqxZoG+kwOcbxyN/p0lH8DWBYJsNjcdbGQubIq2johvRjsLiAWupvE7FwN57veHjLZ9YVjAk0qlHEU3atJDQSZJpnVroP6kNux3UQeqgzhoo4j3Z70gAwBeZ8trJjcWKVZpN6dUXEWlx+0/ZJOKktjwm4vQa9r5LaGHrNuG1S0jqHsJB8P8P6rEYLEte3U0z16g9CtV7TceHYCi1p1fv2tJNyQxjyNXR20+S55kdWHOGw08rc1yrWhnvZoZTXFVn4kKE4pZmTLL6gCqVsQo6tSVUcZSpmbHvrKBxJU7KUqcYdMApMpqUUFa7JekIN0FRKvYp1OgrLWSrVCklch4wKzMIjWUYC914xgRrLGKGXLUS+PH7hn4AJK+kuT6r/J08EZTgfhwYnG0mkd1jhVf+VhBj1dpHquvcZ48sY2mD3nGTBggTIIPoh3soyc08McQ9sPrmW9RTHueUmXeRaqPFmLD8Q+JOnS1ttiJkL2cMbkePN1Ez9eudTgeZvz2iSL7fdGMnwJce6NUuEAiTysfUfZVMiy+pVdpAMlxJJiImCSRtYei6dleVsotgXdzcd/ToF2ZMqxr5IRg5P4FlWXNot/mN3H6wPBCOI87LW6KYLibEjYfIz0U/E+admzSC7U6fd3hsSsYMUXOLdjzMwbm3KYN+Shixub5yKyaiuKBxwdSo8udJcZF50k+60AcgJB9PVVOKOF3U6o002NpDW8PqOe/tHNa3UXNbs2SdLRvBW1yzLe2Ol2rS4AGLCPig7iRbdS8U4lsPYxz+41rA1jmta3WbS4gmTYQOS6JZXyUV/klGCpyZyfKQXY2gzk1j3kBoY0F4cTDYs2NNoV7EFty1uhxedTL8rWkDl6K+KbaVatWZqe92mjTYwHuim0U3GbfE1/ylVczoPYw63l7iNzBc1x5BwG3+yd/ZZqqdfBbwz9feAuA3wmYkXiT/x6ncrrm7DBkGN4kSBPnH3WUyStLjI2iTzmIEj5I3hahDmHmCe6JIg7yfKT6HzXPLZeOiDiqlra15bO4kXILTz9NP1QStRL8PEyafebuSWbFsneDH1Wkrs1scCSDMwNtTRe3MFszP0WcwLgx5Dp0mWkGD7wuB1tyQXRn2NqUzi8IaTb1GEPpiYlzZD2/wBTCY6mAsbgX6SfKD4LVYBzqOIdTkiHRv4S0geekrQZjTw81O0ot01WF7KoDQ9ry/S9gcBJ0uIInkVHJHyPHejnr6xKTHJV8OWPcw7tcR5wd/XdSU2KVAJGhe9mp6TFOKaS6K8dFZjVYDl4+nC8aFnIKiSBqiexTNCe1qSUqHUSFjIVyiF5ASL4UnJsolReo0iTZaHAYfSBKA4Cpb1RIZjAiVzZOT0i8OKVsIwEkD/aZ6pKX05D80dh4e/yeH/9vT/02rm+d/4tT86SS+g9P9x4uXo2XBHuv/p+y1A2KSSX1H3sOL7Uc64j/wAz/Qfu1DcP7x9PsEkl24fsRDJ2dB4e9xY/Hf5jEf8AfofcJJKMf7jH/iC8J7g/NW/1HrJVdn/md+iSSv8AwYr+8kyH36n9X3RjCcvM/wCoUklAsghhffP5z93LKj3n+dP/AFGpJJUFlLMv8yPy0vs1HeMv8nh/+839Ukks/tDHszOdf4p/Iz/4BVae6SSi+g+S7QVpqSSiy6Iqqjakkl8BRI1OKSSSQyHrzmkkkGYUw+yhqbpJKXkp4IEkkkwD/9k=" height="200px"></v-img>
              <v-card-text>
                <h4>Enrique Begué Aguirre</h4>
                <p>CEO</p>
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col md="4" class="text-center">
            <v-card>
              <v-img src="https://media.licdn.com/dms/image/D4D03AQGT8hqEx0tm7Q/profile-displayphoto-shrink_800_800/0/1685821606815?e=2147483647&v=beta&t=zX7OyTdrn4ZRiypcY8EMulqblgN19SZnLAlo-1w22U8" height="200px"></v-img>
              <v-card-text>
                <h4>Joel Bernal Jimeno</h4>
                <p>CEO</p>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Agrega más tarjetas para más miembros del equipo -->
        </v-row>
  
        <!-- Sección de testimonios -->
        <v-row justify="center" style="margin-top: 60px;">
          <v-col class="text-center">
            <h2>Testimonios</h2>
          </v-col>
        </v-row>
  
        <v-row justify="center" style="margin-left: 20px;margin-right: 20px;">
          <!-- Ejemplo de tarjeta de testimonio -->
          <v-col md="4" class="text-center">
            <v-card>
              <v-card-text>
                "Esta es la mejor página que he visto en mi vida"
                <p>- Joaquín Ruiz</p>
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col md="4" class="text-center">
            <v-card>
              <v-card-text>
                "¡Que gran catálogo de libros tiene Librerías Paco!"
                <p>- Oliver Hierro</p>
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col md="4" class="text-center">
            <v-card>
              <v-card-text>
                "¡Yo fui quien les dijo que hicieran debug!"
                <p>- Alejandro Gimenez</p>
              </v-card-text>
            </v-card>
          </v-col>
  
  
          <!-- Agrega más tarjetas para más testimonios -->
        </v-row>
  
        <!-- Sección de contacto -->
  
      
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    name: "AboutUs",
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        aboutUsImage: "https://i.pinimg.com/originals/7a/11/f5/7a11f5274c6de6f11292725c5a7458a7.jpg",
      };
    },
  };
  </script>
  
  <style>
  
  .about-us {
    font-family: Arial, sans-serif;
  }
  
  .heading {
    font-size: 2em;
    color: #333;
  }
  
  .about-us-image {
    margin-bottom: 20px;
  }
  
  .about-us-text {
    text-align: justify;
    line-height: 1.6;
    color: #333;
    margin-right: 50px;
    font-weight: bold;
  }
  
  /* Añade más estilos según sea necesario... */
  
  
  </style>