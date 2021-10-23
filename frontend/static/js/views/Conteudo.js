import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Conteudo");
    }

    async getHtml() {
        
        let html = 
        `
        	<section class="gallery">
        		<div class="container">
        			<div class="title">
        				<h1>FILMES</h1>
        				<br><br>
        			</div>
        			<div class="gallery-items">
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ghostbusters: Mais Além </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/neyMtY2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Supergirl 6ª Temporada </span>
								<a href="magnet:?xt=urn:btih:8121911b11c0ce4c23b79beef4f1c614689b1af3&amp;dn=Supergirl.S06E01.Rebirth.720p.AMZN.WEBRip.DDP5.1.x264-NTb%5brartv%5d&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2780&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2960" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/nxIkVbm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Agulha no Palheiro Temporal </span>
								<a href="magnet:?xt=urn:btih:23f28d501e7a92b64abae79ab428a761fc1e0e2c&amp;dn=Needle%20in%20a%20Timestack%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Tso9LQQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ataque dos Cães </span>
								<a href="magnet:?xt=urn:btih:96667CF83B88DE7BE957EDBF6DF722CC80B7F57D&amp;dn=The.Power.of.the.Dog.2021.1080p.HDRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/M53jtzF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Killing of Kenneth Chamberlain </span>
								<a href="magnet:?xt=urn:btih:A22A7C498F226D7E8545CAA5F270956A37837D91&amp;dn=The.Killing.of.Kenneth.Chamberlain.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/cVXFQCx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Winifred Meeks </span>
								<a href="magnet:?xt=urn:btih:8F139E0BD8C4ABEC62E5870B792DEEDFE81B18D7&amp;dn=The.Ghost.of.Winifred.Meeks.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/e81F9Fi.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Streamline </span>
								<a href="magnet:?xt=urn:btih:73EFC571EBFD023C43808AADD73C725FCD73B757&amp;dn=Streamline.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ceiDl6Y.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lady Usher </span>
								<a href="magnet:?xt=urn:btih:371B08B47FA7D6A09B3A78CB41317D856F2DEC5B&amp;dn=Lady.Usher.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/KruwLNb.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Our Men (Mon Légionnaire) </span>
								<a href="magnet:?xt=urn:btih:D372A67F6065DA7F442EE1DC3BD443B8DDA01F63&amp;dn=Mon.legionnaire.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/1QtOvlt.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">This Is the Year </span>
								<a href="magnet:?xt=urn:btih:C070F691BA4F2BA9AA4B4668C380A3844CF660B8&amp;dn=This.Is.the.Year.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ywADOSA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Nowhere Inn </span>
								<a href="magnet:?xt=urn:btih:7002854FCE05BDC92590DC7CAD81AAE447271536&amp;dn=The.Nowhere.Inn.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Wyv80JJ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Everything Went Fine </span>
								<a href="magnet:?xt=urn:btih:270153B7019CB3362D0E4A1A8929FE98CE680F66&amp;dn=Tout.sest.bien.passe.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/WANLHJI.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Wheels of Beauty </span>
								<a href="magnet:?xt=urn:btih:B6F048E647D033CF76ED089370D91409948538B6&amp;dn=Wheels.of.Beauty.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/e55XzZP.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Hypnosis </span>
								<a href="magnet:?xt=urn:btih:7015281C200344F6DE19F79BC1D513B83ACB97A4&amp;dn=The.Hypnosis.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/weOccKw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Alpines </span>
								<a href="magnet:?xt=urn:btih:7AE5CB7DD439282A55469FA48EF58144B5131AC1&amp;dn=The.Alpines.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/22CYJZS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Shelter in Place </span>
								<a href="magnet:?xt=urn:btih:73F485FC4652C2C7D6F264F8538A0430D4474C27&amp;dn=Shelter.in.Place.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/nm5nZMd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Final Frequency </span>
								<a href="magnet:?xt=urn:btih:A22586A7501621F2F53B43EFE95F629252A6B81D&amp;dn=Final.Frequency.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/7tSVy14.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Strange Friends </span>
								<a href="magnet:?xt=urn:btih:7E687B9123C36441CBCCEB7E6660D340D1B05F2F&amp;dn=Strange.Friends.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/lAyZ0i0.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Psycho Intern (Don’t Look There) </span>
								<a href="magnet:?xt=urn:btih:2165FB20B57C49522685139B495EA04D98B938F8&amp;dn=Psycho.Intern.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/2EStSaQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lie to Me the Truth </span>
								<a href="magnet:?xt=urn:btih:9848B1176C4027B110BAD070B343E391E7CA6DF1&amp;dn=Sovri.mne.pravdu.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/vdQOqY3.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Night of the Animated Dead </span>
								<a href="magnet:?xt=urn:btih:251ADBEA45B8AF69BD7B8EDC15CB0F7541F63C6E&amp;dn=Night.of.the.Animated.Dead.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/CnwGwA8.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Cry Macho: O Caminho para Redenção </span>
								<a href="magnet:?xt=urn:btih:625382C8A52527FD41CDCA18CA50150ACBE11C76&amp;dn=Cry.Macho.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/MTOgIMn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lone Wolf </span>
								<a href="magnet:?xt=urn:btih:935D1A837B79B122118D445D441DACB8AF934654&amp;dn=Lone.Wolf.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/C4vyo02.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Third War </span>
								<a href="magnet:?xt=urn:btih:EC2DE7B8BF3953587D1FB39AC39117A4AE07BFBB&amp;dn=La.Troisieme.guerre.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/W7HZWlB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Invisible Alien </span>
								<a href="magnet:?xt=urn:btih:793B76F3626927EE36FE75593DE8781FF2FCC816&amp;dn=Invisible.Alien.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/hBkX2kp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pourris gâtés (Spoiled Brats) </span>
								<a href="magnet:?xt=urn:btih:04E2040D0FF44AF2029DA453CE65C8B95AD12635&amp;dn=Pourris.gates.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/51MkQhJ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">East of the Mountains </span>
								<a href="magnet:?xt=urn:btih:E7CC3771A873EC4DF563B2C4E105ACCB695D8060&amp;dn=East.of.the.Mountains.2021.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/fTSt2ak.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Devil’s Five </span>
								<a href="magnet:?xt=urn:btih:6198F22ED0669BEDE21A7AB3BD3154C34947F62A&amp;dn=Devils.Five.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/MudRiQ5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Eiffel </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/967CeLy.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Between Waves </span>
								<a href="magnet:?xt=urn:btih:45CC465D63B82A381C1E9FBEB624CE09E3FBCCD0&amp;dn=Between.Waves.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/gjhzD9Q.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Crocodile Island </span>
								<a href="magnet:?xt=urn:btih:4A7E4B6FC70B929CC555581C1541522A578C46AD&amp;dn=Crocodile.Island.2020.720p.HDRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/nOiYoDW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Apache Junction </span>
								<a href="magnet:?xt=urn:btih:7EB8F8A2D9B2657EF01A1576B3FB40D43417A049&amp;dn=Apache.Junction.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/aFxnkwR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Anti Corona Virus </span>
								<a href="magnet:?xt=urn:btih:3D3AEF3A15A67DA7959859696180C0B39F3D48B3&amp;dn=Anti.Corona.Virus.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/QHg1hlJ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Art of the Dead </span>
								<a href="magnet:?xt=urn:btih:0B9BDE96958475C0B47F78DA1E514D1A1E4BF2CA&amp;dn=Art.of.the.Dead.2019.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/dzGHqrz.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Família Addams 2: Pé na Estrada </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/TD86DHa.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Cabin (Hytte) </span>
								<a href="magnet:?xt=urn:btih:9DB18338DBE365A05515B5593CFAD10F5574451C&amp;dn=Hytte.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Eg8wZH4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Recalled </span>
								<a href="magnet:?xt=urn:btih:1AB74B04512A8781031B90770258C44483992390&amp;dn=Recalled.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ngRHvr4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Through the Glass Darkly </span>
								<a href="magnet:?xt=urn:btih:E32D0C18F8030F762FE8BA1DA513B71450ABECAB&amp;dn=Through.the.Glass.Darkly.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/PlonBrP.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Curse of Humpty Dumpty </span>
								<a href="magnet:?xt=urn:btih:A87CC51FADF966C09B025478AE4A6FE3D478CA0D&amp;dn=The.Curse.Of.Humpty.Dumpty.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ffg00yV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Coronavirus Conspiracy </span>
								<a href="magnet:?xt=urn:btih:C8CEB4E93EC01833005179390F001E1A9037F046&amp;dn=Coronavirus.Conspiracy.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/NXWAwPr.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Venus as a Boy </span>
								<a href="magnet:?xt=urn:btih:3BAE769FFD7F9E9F9E9A14F76DF00124FD481FEE&amp;dn=Venus.as.a.Boy.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/2aAdTQk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Caça</span>
								<a href="magnet:?xt=urn:btih:1bcef8f1d0c39611967a3f63a5bfc54ccac20d2d&amp;dn=Ca%c3%a7a-Fantasmas%20%e2%80%9cVers%c3%a3o%20Estendida%e2%80%9d%20720p%20(2016)%20Dual%20%c3%81udio%20BluRay%205.1%20--%20By%20-%20Lucas%20Firmo&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.tfile.me%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2fmgtracker.org%3a2710%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.com%3a2780%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2740%2fannounce&amp;tr=http%3a%2f%2ft2.pow7.com%2fannounce&amp;tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Yrrnpq0.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Top Gun: Maverick </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/7Iekwm6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Top Gun: Ases Indomáveis </span>
								<a href="magnet:?xt=urn:btih:e436a1fa514a4eb368eb610c06ec0e64f0bfaf3f&amp;dn=Top%20Gun%20%5b1986%20DUAL%20AUDIO%5d%20720p%20%2b%20Soundtrack" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/7GuyQCN.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Furia 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:bde0cf9fd6526dbeff4b238a7ae219f81ae63efe&amp;dn=Furia.S01.NORWEGIAN.WEBRip.x264-ION10&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2730&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2910&amp;tr=udp%3a%2f%2ftracker.thinelephant.org%3a12770&amp;tr=udp%3a%2f%2ftracker.tallpenguin.org%3a15720" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/13r4jkP.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Veil 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:3735ee0fdb6342ceb3228344871dd3d970b4761a&amp;dn=The.Veil.S01E01.KOREAN.WEBRip.x264-KOREA&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2760&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2840&amp;tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15720&amp;tr=udp%3A%2F%2Ftracker.slowcheetah.org%3A14780" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/G6gommh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Veneza </span>
								<a href="magnet:?xt=urn:btih:0f75b7587829d028697837a6f44bb0196c9a3e96&amp;dn=Veneza%202019%20WEB-DL%201080p%20NACIONAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/l90uhYR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lucky </span>
								<a href="magnet:?xt=urn:btih:c351feccac3f125457c3c638f1c9e1322781f49e&amp;dn=Lucky%20Uma%20Mulher%20de%20Sorte%202020%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/cq7fT1z.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Matemático </span>
								<a href="magnet:?xt=urn:btih:b4622cd195a40244699ace8308b1fdd645cdfd85&amp;dn=O%20Matematico%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/6uwiJFf.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sobreviva ao Jogo </span>
								<a href="magnet:?xt=urn:btih:07412e7a28909e5c2d3cd38ab8f4e602d8e7cbe4&amp;dn=Sobreviva%20ao%20Jogo%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/nVUrBhg.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Último Duelo </span>
								<a href="magnet:?xt=urn:btih:CB6A26C23464E63BC92A3EFDF8D7C089DF365656&amp;dn=Le.Dernier.duel.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/q59zz5Z.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Tempo </span>
								<a href="magnet:?xt=urn:btih:ED7350689B36B5278145374AE4B4F653A8010BA8&amp;dn=Old.2021.1080p.HDRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Jg64aEC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Angeliena </span>
								<a href="magnet:?xt=urn:btih:7c1f808f6d9fae4eeb5a7e0f6c6a68023fff772b&amp;dn=Angeliena.2021.1080p.NF.WEBRip.DDP5.1.x264-playWEB&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2830&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2820&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12710&amp;tr=udp%3A%2F%2Ftracker.fatkhoala.org%3A13780" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/9s4Zb9e.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Batalha Esquecida </span>
								<a href="magnet:?xt=urn:btih:cf28a03cf85f870f2c16714bf4818ef39ff826e6&amp;dn=A%20Batalha%20Esquecida%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/qB0T9Z8.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Velvet Underground </span>
								<a href="magnet:?xt=urn:btih:2f6e893cfb8a4fb4a46f55a41b3025e6d7bed097&amp;dn=The.Velvet.Underground.2021.1080p.WEBRip.x264-RARBG&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2740&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2970&amp;tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15770&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12720" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/OEHYAZm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">No Jogo do Amor </span>
								<a href="magnet:?xt=urn:btih:b0655a0dba85aea5af196cc65013857e875279d7&amp;dn=No%20Jogo%20do%20Amor%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/mV0DgOm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Trip </span>
								<a href="magnet:?xt=urn:btih:7aa167f0b94a76d569139ae995a297bab92cbba0&amp;dn=The%20Trip%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/uQPzNdV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Under Wraps: Uma Múmia no Halloween </span>
								<a href="magnet:?xt=urn:btih:561169cd6d59839b79a61dad3e9517a6f8c22118&amp;dn=Under%20Wraps%20Uma%20M%c3%bamia%20no%20Halloween%202021%20720p%20WEB-DL%20DUBLADO&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Nw5HaGw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Basement </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/krZ5vJH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Spirit of Two Swords </span>
								<a href="magnet:?xt=urn:btih:F1D770B4EAC6C6F51F6FC53AB726146FE6480BDD&amp;dn=Spirit.of.Two.Swords.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/f8jIGdY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mutation on Mars </span>
								<a href="magnet:?xt=urn:btih:88AAC3ED74C66AEE901CCA6464AE69EF05197895&amp;dn=Mars.anomaly.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/QkFMR3r.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Broken Youth  </span>
								<a href="magnet:?xt=urn:btih:AA236ABD59956A4B24066AA9BA1E9E283C7E67A8&amp;dn=Broken.Youth.2019.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/hZ2dDyV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">8 (Sekiz) </span>
								<a href="magnet:?xt=urn:btih:8E970A97AABDA2B8D35D1F32D18BEE5F88437D80&amp;dn=Sekiz.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/FTRjaRQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Chompy & The Girls </span>
								<a href="magnet:?xt=urn:btih:895DC67875971C3FA40A5785A3811FFB8E79511C&amp;dn=Chompy.and.the.Girls.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/pUHXZtQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Companion </span>
								<a href="magnet:?xt=urn:btih:45C808C6F0D1D07FA17AB11E6ACFBC5ED2B28945&amp;dn=Companion.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/rhkii5I.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">My Son </span>
								<a href="magnet:?xt=urn:btih:1E5D93B59CE84109A9D811DDE95CA9846D9805C9&amp;dn=My.Son.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/pU1as78.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Paper Dragons </span>
								<a href="magnet:?xt=urn:btih:9D6FC43450C9C3DADFE5EDAF87BBD7AC49858556&amp;dn=Paper.Dragons.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/5OdQmiR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Na Mente do Demônio </span>
								<a href="magnet:?xt=urn:btih:c0471a25d80126818ea593ed267c6b3437f63570&amp;dn=Na%20Mente%20do%20Dem%c3%b4nio%202021%201080p%20BluRay%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/4mUMefs.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Filhos do Ódio </span>
								<a href="magnet:?xt=urn:btih:2e21e9d63944ce6ce7fae5e44bd2357989a1ced4&amp;dn=Filhos%20do%20%c3%93dio%202020%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/wlIIpks.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Imperial Swordsman </span>
								<a href="magnet:?xt=urn:btih:D7744BE56E39BAE013C640CC4CEE90010F1BE4DD&amp;dn=The.Imperial.Swordsman.2019.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/TWzLgOa.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kill The Dangerous City </span>
								<a href="magnet:?xt=urn:btih:84DD258EBBA6B781303B8A544FC490CB36470C29&amp;dn=Kill.The.Dangerous.City.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Yw83xde.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Hamon: Yakuza Boogie </span>
								<a href="magnet:?xt=urn:btih:32FA821963054EF056EB3F2BDC28E6D8E779A5BE&amp;dn=Hamon.Yakuza.Boogie.2017.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ZTe0PLC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Fake Famous: Uma Experiência Surreal nas Redes </span>
								<a href="magnet:?xt=urn:btih:39f192f30bd82882375c64c9c9ccf5c2e1685f79&amp;dn=Fake%20Famous%20-%20Uma%20Experi%c3%aancia%20Surreal%20nas%20Redes%202021%20WEB-DL%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Wp9SBY2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Venom </span>
								<a href="magnet:?xt=urn:btih:637d54ce989ae859285f7d2a2d577eaf952efece&amp;dn=%5bACESSE%20comando.to%5d%20Venom%20(2018)%20%5bBluRay%5d%20%5b720p%5d%20%5bDUAL%5d&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker4.piratux.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2ft2.pow7.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.yify-torrents.com%3a80%2fannounce&amp;tr=http%3a%2f%2fwww.h33t.com%3a3310%2fannounce&amp;tr=http%3a%2f%2fexodus.desync.com%2fannounce&amp;tr=http%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2fbt.careland.com.cn%3a6969%2fannounce&amp;tr=http%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.istole.it%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.blazing.de%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.yify-torrents.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.prq.to%2fannounce&amp;tr=udp%3a%2f%2ftracker.1337x.org%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.com%3a2740%2fannounce&amp;tr=udp%3a%2f%2ftracker.ex.ua%3a80%2fannounce&amp;tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&amp;tr=udp%3a%2f%2f12.rarbg.me%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f11.rarbg.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce&amp;tr=udp%3a%2f%2ffr33dom.h33t.com%3a3310%2fannounce&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/FK8qSST.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Jack, O Estripador: A História Não Contada </span>
								<a href="magnet:?xt=urn:btih:0aa94e282e3fe2650e1577457971d2526f412e33&amp;dn=Jack%2c%20O%20Estripador%20-%20A%20Hist%c3%b3ria%20n%c3%a3o%20Contada%202021%20WEB-DL%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/vWrcE0I.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Um Anjo em Nossas Vidas </span>
								<a href="magnet:?xt=urn:btih:1cd64b333e239fc649f1a370b40eb69441c9d5a3&amp;dn=Um%20Anjo%20em%20Nossas%20Vidas%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ILEOD0l.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Fio Invisível </span>
								<a href="magnet:?xt=urn:btih:73a332af42761fd0392fdf30176db58516931d0e&amp;dn=O%20Fio%20Invis%c3%advel%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/DNagYhs.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Halloween Kills: O Terror Continua </span>
								<a href="magnet:?xt=urn:btih:2602b22ea003a672f7cdeaf69eff67f5ea1096b6&amp;dn=Halloween.Kills.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/9LgZvWh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Blame </span>
								<a href="magnet:?xt=urn:btih:277792FC403323539FE621409473BC4E5D65FD85&amp;dn=Blame.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/WLaj3J7.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Asih 2 </span>
								<a href="magnet:?xt=urn:btih:5CF75B2B04DC1820F770CC55BE508777BD33EB35&amp;dn=Asih.2.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/0oduWTV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Os Olhos de Tammy Faye </span>
								<a href="magnet:?xt=urn:btih:D062D27AE2F0F2C32BA0C0F3365CA3E879ABDF67&amp;dn=The.Eyes.of.Tammy.Faye.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ys2hyt2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Grand Duke of Corsica </span>
								<a href="magnet:?xt=urn:btih:88A03273EB95E54AC2BC886C9F6099FEC679AB21&amp;dn=The.Grand.Duke.of.Corsica.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/C4A7BFs.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Good Things Devils Do </span>
								<a href="magnet:?xt=urn:btih:36667B59EDE1A7378BDBC82F6BF6C0D80FBC475A&amp;dn=The.Good.Things.Devils.Do.2020.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/q0xLKR3.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">This Is the Night </span>
								<a href="magnet:?xt=urn:btih:B085ECD26E2B0B1946D34767933B457F5BAD86CF&amp;dn=This.Is.the.Night.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ZowqTKD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Aterrorizados </span>
								<a href="magnet:?xt=urn:btih:017EEC786B88BC20313861750986CA5FF3484C4F&amp;dn=Terrified.2017.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/alaNAqD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O2 (Dawn of War) </span>
								<a href="magnet:?xt=urn:btih:6C165C4B857B8B60BADB655F30E3886004CD90D4&amp;dn=O2.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/x6dQNPo.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Chicago PD 9ª Temporada </span>
								<a href="magnet:?xt=urn:btih:8fd54fbea0251aacabf7ac0673055f0081b1e014&amp;dn=Chicago.PD.S09E01.720p.WEB.H264-GGEZ%5Brartv%5D&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2870&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2910&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12770&amp;tr=udp%3A%2F%2Ftracker.slowcheetah.org%3A14800" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/ZlhspGb.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Violet Evergarden: O Filme </span>
								<a href="magnet:?xt=urn:btih:a2a8fd8828b8e59b170468023048430ce5be07e7&amp;dn=Violet%20Evergarden%20-%20O%20Filme%202020%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/XukSC25.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Doogie Kamealoha: Doutora Precoce 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:e3acc2bf7e7488299d7565b3e103b6d77a4bbf8f&amp;dn=Doogie.Kamealoha.S01E01.720p.WEBRip.DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ZLF1VmG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dune World </span>
								<a href="magnet:?xt=urn:btih:3F9CBD68CB5695B4D95618B46A98CE5977A36CFA&amp;dn=Dune.World.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/A9fgiFp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">C.I.Ape </span>
								<a href="magnet:?xt=urn:btih:4ABE4EECCCA620045F22C1C5EC9CF51C952EC609&amp;dn=C.I.Ape.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/rhM5DmO.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rumba Love </span>
								<a href="magnet:?xt=urn:btih:970C6F244911C1E66EA6628A84A8796AAAA0B4EC&amp;dn=Rumble.Love.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/8yAMXVy.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Halloween Heroes </span>
								<a href="magnet:?xt=urn:btih:2DA14890D94E093926F362E516512603EB031EA4&amp;dn=Halloween.Heroes.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Waov9SS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Outra Face da Guerra </span>
								<a href="magnet:?xt=urn:btih:9F40989B3EA96B4E84C24721E820675A1EAE64D2&amp;dn=The.Rifleman.2019.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/9vDmn78.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Purity Falls </span>
								<a href="magnet:?xt=urn:btih:C81EFC6426E48A108AD3D31BD61F2FC7041134B2&amp;dn=Purity.Falls.2019.720p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/d0ABPUW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Bright: Alma de Samurai </span>
								<a href="magnet:?xt=urn:btih:2d7a6ba0f8706b174d64d3f1593f5234f2d85490&amp;dn=Bright%20-%20Alma%20de%20Samurai%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/1aNxAW7.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ted Bundy: American Boogeyman </span>
								<a href="magnet:?xt=urn:btih:F8D211A8CFF87767D753C4C4E9BAE329E898A285&amp;dn=Ted.Bundy.American.Boogeyman.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/tob6ubZ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Escape Room 2: Tensão Máxima [VERSÃO ESTENDIDA] </span>
								<a href="magnet:?xt=urn:btih:8afb6d3f243aaa89db3c5e7c6ca5928d2670f929&amp;dn=Escape%20Room%202%20-%20Tens%c3%a3o%20M%c3%a1xima%20%5bVERS%c3%83O%20ESTENDIDA%5d%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/X9dL0Dm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Venom: Tempo de Carnificina </span>
								<a href="magnet:?xt=urn:btih:32fea567b52ba88b5bd1c699b3ff016b68a4d7c2&amp;dn=Venom.Let.There.Be.Carnage.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/chrkk1k.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">007 </span>
								<a href="magnet:?xt=urn:btih:44732c8f9dab0ea19279c5cf0a6ca403885996a4&amp;dn=No.Time.to.Die.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/iED5BlTFVky8lKw8SuG7QX0q6yI.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sedenta de Sangue </span>
								<a href="magnet:?xt=urn:btih:CD180CA4E1977B3BFED3C3C6671279FBD86C2241&amp;dn=Bloodthirsty.2020.720p.WEBRip.800MB.x264-GalaxyRG+%E2%AD%90&amp;tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/1ohIA4j.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Estripador </span>
								<a href="magnet:?xt=urn:btih:3E314B157E8E0C85E10A5264379607531C409F89&amp;dn=Ripper.Untold.2021.1080p.WEBRip.1400MB.DD5.1.x264-GalaxyRG&amp;tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/NbRcsaY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Madres: Mães de Ninguém </span>
								<a href="magnet:?xt=urn:btih:0da01a99091862d45cc070a4875ae91b9352c51c&amp;dn=Madres%20-%20M%c3%a3es%20de%20Ningu%c3%a9m%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/0y6tVxh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Muppets Haunted Mansion: A Festa Aterrorizante </span>
								<a href="magnet:?xt=urn:btih:534805504da0eee34bd56bc0f57b330bb59834d3&amp;dn=Muppets%20Haunted%20Mansion%20-%20A%20Festa%20Aterrorizante%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/fI5U5zi.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">upla Explosiva 2 </span>
								<a href="magnet:?xt=urn:btih:dd1d1cc0789702438d34099f707e612c0dff6a64&amp;dn=Dupla%20Explosiva%202%20-%20E%20a%20Primeira-Dama%20do%20Crime%202021%20BluRay%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/sOHhCiH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Maligno </span>
								<a href="magnet:?xt=urn:btih:6a0632a93e3ff5b70785d5ea846606bb12118373&amp;dn=Maligno%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/SW9hAik.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Injustice </span>
								<a href="magnet:?xt=urn:btih:2eb55afb1d083c0dab659acf974459fc29545f1b&amp;dn=Injustice.2021.720p.BluRay.H264.AAC-RARBG&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2900&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2830&amp;tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15770&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12740" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/NeAdHAf.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Meu Irmão, Minha Irmã </span>
								<a href="magnet:?xt=urn:btih:e49f5a425ae6e2e73d71c616847c20397f70f7a1&amp;dn=Meu%20Irm%c3%a3o%2c%20Minha%20Irm%c3%a3%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/l6zN2z1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dano Colateral </span>
								<a href="magnet:?xt=urn:btih:583f1374518c997fd40e027d8567c1d05acc7af3&amp;dn=Dano%20Colateral%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/FrSoLfh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pokémon, o Filme: Segredos da Selva </span>
								<a href="magnet:?xt=urn:btih:abe0ba15e2554b99ccddb0bfcbc593777b6d431b&amp;dn=Pok%c3%a9mon%2c%20o%20Filme%20-%20Segredos%20da%20Selva%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/hw6L7Dn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Mansão </span>
								<a href="magnet:?xt=urn:btih:97fc262d7aea1bf3300b66cb1e727117e98dcce3&amp;dn=A%20Mans%c3%a3o%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/gAcObcM.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Senhora do Casarão </span>
								<a href="magnet:?xt=urn:btih:9c8386bab6e0ca326f581898656391917644394e&amp;dn=A%20Senhora%20do%20Casar%c3%a3o%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/2MGWYmk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Infiltrado </span>
								<a href="magnet:?xt=urn:btih:10ccb57ea7c6a8ac1e85dae90726699e79cb0e32&amp;dn=Infiltrado%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/K2OdEy9.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mayday </span>
								<a href="magnet:?xt=urn:btih:52370b8f2e490728239c24b5288b643a21420660&amp;dn=Mayday.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/CALL72V.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Tão Legal Quanto Você </span>
								<a href="magnet:?xt=urn:btih:ed362d48b484187b927213fa1d343573b1a73593&amp;dn=T%c3%a3o%20Legal%20Quanto%20Voc%c3%aa%202021%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/hrVvFG4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Calazar </span>
								<a href="magnet:?xt=urn:btih:3a08fc19121f9d2ca2f0f7456f2d08bef45789c8&amp;dn=Kala.Azar.AKA.Black.Fever.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/8z7Y8gH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">I Love Us </span>
								<a href="magnet:?xt=urn:btih:af14ded4a95c723a884fb82382007f75b96fcb79&amp;dn=I.Love.Us.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/WdcnOLZ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Turner e Hooch 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:6a6911a8f381fa5cf73d2c8dc8730eab6e1242d9&amp;dn=Turner.and.Hooch.S01E01.1080p.WEB-DL.DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/t6XRU2j.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Miss Fisher e a Cripta das Lágrimas </span>
								<a href="magnet:?xt=urn:btih:aee2e7c16601d38bb460ce47c21a4fe3eb3b6e02&amp;dn=Miss.Fisher.And.The.Crypt.Of.Tears.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/NoxjWCH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Tem Alguém na sua Casa </span>
								<a href="magnet:?xt=urn:btih:c5fa24ff6f747494361550758fbb304b380da6cb&amp;dn=Tem%20Algu%c3%a9m%20na%20sua%20Casa%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Pem5xZh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Silêncio da Chuva </span>
								<a href="magnet:?xt=urn:btih:940cc1863f347584718f5e6e013216b4d3740530&amp;dn=O%20Sil%c3%aancio%20da%20Chuva%202021%20WEB-DL%201080p%20NACIONAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/XOFO8N2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dark Web: Descent Into Hell </span>
								<a href="magnet:?xt=urn:btih:783529de321930837c825508ccca9ff47b9c5686&amp;dn=Dark.Web.Descent.Into.Hell.2021.1080p.WEBRip.DD5.1.x264-NOGRP&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2870&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2910&amp;tr=udp%3a%2f%2ftracker.thinelephant.org%3a12710&amp;tr=udp%3a%2f%2ftracker.fatkhoala.org%3a13750" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/4UPR2fz.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Casa Sombria </span>
								<a href="magnet:?xt=urn:btih:d6aed94af4c81bb8d7ac3ddc569e299e23254994&amp;dn=The.Night.House.2021.720p.AMZN.WEBRip.AAC2.0.X.264-EVO&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337&amp;tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/vrmKnZP.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Maldição de Isabelle </span>
								<a href="magnet:?xt=urn:btih:f9b8751350ff09214976de5cf56747224bab359b&amp;dn=A%20Maldi%c3%a7%c3%a3o%20de%20Isabelle%202019%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Ucypn4b.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Três Histórias de Amor </span>
								<a href="magnet:?xt=urn:btih:98eeab6b6dd9f0939a5e48488dd71fe284cf6a8b&amp;dn=Tr%c3%aas%20Historias%20de%20Amor%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/yG0e5KB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sintonizada em Você </span>
								<a href="magnet:?xt=urn:btih:fd77a73b2a9ab16dc33144f7d914a4016fcb89d7&amp;dn=Sintonizada%20Em%20Voc%c3%aa%202019%205.1%20(720p)%20LAPUMiA&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.trackerfix.com%3a83%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2feddie4.nl%3a6969%2fannounce&amp;tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/HVRjlxM.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Typo </span>
								<a href="magnet:?xt=urn:btih:c5d4d72da04c955709df5014dcc70b4b28bf7fd8&amp;dn=Typo.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/YiUGxQC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Resonator: Miskatonic U </span>
								<a href="magnet:?xt=urn:btih:591981cb66c3c8b12e4ab1a58806d03b2e4d5d92&amp;dn=The.Resonator.Miskatonic.U.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/PI5BmR5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">LEGO Star Wars: Contos Aterrorizantes </span>
								<a href="magnet:?xt=urn:btih:6a194a8d52ab09327ae4ed22a17e54b5855fba55&amp;dn=LEGO%20Star%20Wars%20-%20Contos%20Aterrorizantes%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/VrEqoK4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Seven Deadly Sins Cursed by Light </span>
								<a href="magnet:?xt=urn:btih:04b6f2fda90548e3fab6d3619276b34054ade386&amp;dn=The%20Seven%20Deadly%20Sins%20Cursed%20by%20Light%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/9jFqI8M.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Purgatory </span>
								<a href="magnet:?xt=urn:btih:09791204489F0C6AE619775CB529C96A2D8856DF&amp;dn=Purgatory.2021.720p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/27eC8jp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Blush </span>
								<a href="magnet:?xt=urn:btih:794e9c06cf16502ba3157b3e0806cdab88456c7d&amp;dn=Blush%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/qKsJlz9.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Um Lugar </span>
								<a href="magnet:?xt=urn:btih:b4a6165f7deafec579706c43cca62dd965eac73c&amp;dn=Um%20Lugar%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/YTOEpJ6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Culpado </span>
								<a href="magnet:?xt=urn:btih:3a73f1201f3572f5532a8c5fd152e6c7167b83db&amp;dn=O%20Culpado%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/VMLLrAW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Forever Rich </span>
								<a href="magnet:?xt=urn:btih:3c66b6df29536ca2bf2ebd32d07d3eef4bb16297&amp;dn=Forever%20Rich%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Dcp0149.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pegue a Bala </span>
								<a href="magnet:?xt=urn:btih:ea1d2394f14a120ba3043397427059b1bfa6d6e8&amp;dn=Pegue%20a%20Bala%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/WbloBB5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Difícil de Engolir </span>
								<a href="magnet:?xt=urn:btih:98e7f1b86442e9820e840ca34d018f675189580c&amp;dn=Dif%c3%adcil%20de%20Engolir%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/PyGzdzq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Diana: O Musical </span>
								<a href="magnet:?xt=urn:btih:9e675302a2b51ecb54f5b3f17257b513a60aa400&amp;dn=Diana.2021.1080p.NF.WEBRip.DDP5.1.Atmos.x264-TEPES&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2940&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2860&amp;tr=udp%3a%2f%2ftracker.slowcheetah.org%3a14780&amp;tr=udp%3a%2f%2ftracker.tallpenguin.org%3a15750" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/0Z5MtGI.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Bingo Macabro </span>
								<a href="magnet:?xt=urn:btih:7fba8f438ad49a2593c6e1cad9172040b0266303&amp;dn=O%20Bingo%20Macabro%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Taa81qs.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Negra Como a Noite </span>
								<a href="magnet:?xt=urn:btih:9ca426c8cb13f06298c3f79d6e205e95131545e9&amp;dn=Negra%20Como%20a%20Noite%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Bt9JUua.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Chernobyl: O Filme </span>
								<a href="magnet:?xt=urn:btih:180cb35cd72fa5e4b14947d913143f96076a3ca2&amp;dn=Chernobyl%201986.2021.720p.WEBRip.AAC2.0.X.264-EVO&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2ffasttracker.foreverpirates.co%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&amp;tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.uw0.xyz%3a6969%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2970%2fannounce&amp;tr=udp%3a%2f%2ftracker.zer0day.to%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/OMq3xmo.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Unlit </span>
								<a href="magnet:?xt=urn:btih:96B4DDEBB52571D4763A1DA1DA073F74BB0E52E3&amp;dn=The.Unlit.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/bNYuIZV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Manson Brothers Midnight Zombie Massacre </span>
								<a href="magnet:?xt=urn:btih:DA8CA891127D668DC0E6F873C80DD6E92F58D1E2&amp;dn=The.Manson.Brothers.Midnight.Zombie.Massacre.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/GgSzGWH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">As Rainhas do Desconto </span>
								<a href="magnet:?xt=urn:btih:737AD25AB20E318166F3CB443685842D9E97E706&amp;dn=Queenpins.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/DNqKGKY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pick A Side </span>
								<a href="magnet:?xt=urn:btih:46D3DC0F4ACD5E9A587C4E00E7424622281C3C4D&amp;dn=Pick.A.Side.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/hRQIbrv.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Gunfight at Dry River </span>
								<a href="magnet:?xt=urn:btih:B44DE239B229E32DEA218EE686EF9DD9B6856EC9&amp;dn=Gunfight.at.Dry.River.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/iPWJ7ps.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Death Drop Gorgeous </span>
								<a href="magnet:?xt=urn:btih:464AB5CDD82D45C548D6A701AEC0B64FF5837FE0&amp;dn=Death.Drop.Gorgeous.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/lH9lQ6s.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dating & New York </span>
								<a href="magnet:?xt=urn:btih:53B311D9B93981FC82D061981AFC1A4804052D1C&amp;dn=Dating.and.New.York.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Th1okZ9.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Catch the Bullet </span>
								<a href="magnet:?xt=urn:btih:B5552968BED9256453949AA9ABF571C55D091D35&amp;dn=Catch.the.Bullet.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/gsbCqSY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Card Counter </span>
								<a href="magnet:?xt=urn:btih:C33EFC197A742AC14CD87B290363D2647E7C2348&amp;dn=The.Card.Counter.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/nHbQq6a.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Synapse </span>
								<a href="magnet:?xt=urn:btih:70DF2F456E9CED0826DFAFBA505E42912374BD80&amp;dn=Synapse.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/9P4PdIO.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Royal Jelly </span>
								<a href="magnet:?xt=urn:btih:43ED8DFA658DE0A4DE4474F2420D960F305BBAD7&amp;dn=Royal.Jelly.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/7ieooo9.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Teenage Vampire </span>
								<a href="magnet:?xt=urn:btih:9D7CD27A6B4B723B1CE702169E15E211E67F85B0&amp;dn=Teenage.Vampire.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/HbI4Rpx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">C.O.R.N. </span>
								<a href="magnet:?xt=urn:btih:3D211E3FEF5EA5AB94814EB7EC564BB46CE5825A&amp;dn=C.O.R.N.a.Field.of.Screams.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/2cXDfDA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Martyrs Lane </span>
								<a href="magnet:?xt=urn:btih:9CEFE8AD9A2FE726D9C31E8C70B56054E7AD2D6B&amp;dn=Martyrs.Lane.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/ZMMdr2l.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Hunters </span>
								<a href="magnet:?xt=urn:btih:18F8E5A47FB6D6389BA7C71ADAACD9BB310CF4B6&amp;dn=Hunters.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/IyOB8rH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Noxious 2: Cold Case </span>
								<a href="magnet:?xt=urn:btih:A7C47D11309F26F7006CB53B9C98423CE8FCCBCC&amp;dn=Noxious.2.Cold.Case.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/rFFWoWW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ekip Oyunu </span>
								<a href="magnet:?xt=urn:btih:D77B8DC964E98BE60F40C425CB01DB7912EA12F3&amp;dn=Ekip.Oyunu.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/VmYAIJF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Familiars </span>
								<a href="magnet:?xt=urn:btih:32578802A1BE1A0AA1159B649480E1C6FF17BB59&amp;dn=Familiars.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/PjScpZY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Páscoa Negra </span>
								<a href="magnet:?xt=urn:btih:9B33A63D27291980C5B489B9521B7F09001B0487&amp;dn=Black.Easter.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/4xSqDZ1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Best Sellers </span>
								<a href="magnet:?xt=urn:btih:D79D3028D4E9BF63BCC4FA0A41ECA47D3D80B0AE&amp;dn=Best.Sellers.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/3qKZ61v.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Bad Candy </span>
								<a href="magnet:?xt=urn:btih:2A28E7AAE2573494368C7F93F721D62896AB2FA5&amp;dn=Bad.Candy.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/USCi28G.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Melhor Amigo </span>
								<a href="magnet:?xt=urn:btih:2c4cce7dddc57d20bf74c1d77038e9a03b84304f&amp;dn=O%20Melhor%20Amigo%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/X1Gl0no.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Another Girl </span>
								<a href="magnet:?xt=urn:btih:B4FEB63E0DBC8CB5D3B222EB36242122C47FF318&amp;dn=Another.Girl.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/3PRdpyj.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Fomos Canções </span>
								<a href="magnet:?xt=urn:btih:c80f02f4895572f661541003f7cd6a87db9cfd54&amp;dn=Fomos%20Can%c3%a7%c3%b5es%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/OVqGLjz.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kin 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:b7f3fedbe0080e9e416508b1f41edde04e55ac7e&amp;dn=Kin.S01E01.720p.WEB.H264-GGEZ%5Brartv%5D&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2870&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2790&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12730&amp;tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15800" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/VC9UZzG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Superhost </span>
								<a href="magnet:?xt=urn:btih:dbef9ab9dc0a97198e3fce6585964af28eff2e56&amp;dn=Superhost.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/T2snE0e.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Megalodon Rising </span>
								<a href="magnet:?xt=urn:btih:b3d68d1a387d81e8804d39ec89133ba6d0183352&amp;dn=Megalodon.Rising.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/a8T6UUd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Wired Shut </span>
								<a href="magnet:?xt=urn:btih:8624850bc3ea18548ff125421ee4b723f45ea23f&amp;dn=Wired.Shut.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/YUGvSvQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Hands Up </span>
								<a href="magnet:?xt=urn:btih:a64a997c6f1de19027d5498391f7366ec9cf9109&amp;dn=Hands.Up.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/YKN3P4N.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Black Box (Boîte noire) </span>
								<a href="magnet:?xt=urn:btih:fe5372fd54d38f2ff1c6185d99c24548d71910c3&amp;dn=Boite.noire.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ah0CUlQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Madness Inside Me </span>
								<a href="magnet:?xt=urn:btih:c6ebb81f6e0b78dcb2276a6f88ee0a1c92f3efd1&amp;dn=The.Madness.Inside.Me.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/C0njna5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Small Engine Repair </span>
								<a href="magnet:?xt=urn:btih:0974d2cade3cda32ef1772eee9c2e82207a53741&amp;dn=Small.Engine.Repair.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/o9tAQ9Z.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Church People </span>
								<a href="magnet:?xt=urn:btih:dd2b16b08082de198f134d2b9d435bb4ca5c8225&amp;dn=Church.People.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/9Yc5dbK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Free Guy </span>
								<a href="magnet:?xt=urn:btih:e1163eec087017c2ca25f013b3fcae6366d75dcd&amp;dn=Free%20Guy%202021%201080p%20BluRay%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/qpjVz5L.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ninguém Sai Vivo </span>
								<a href="magnet:?xt=urn:btih:7cc23296fac5e3153527f3a22d5c45d7daa7ff9b&amp;dn=Ningu%c3%a9m%20Sai%20Vivo%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/5a42W9d.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">G.I. Joe Origens: Snake Eyes </span>
								<a href="magnet:?xt=urn:btih:bb8676258366b92870362354635ef52de7a3f205&amp;dn=G.I.%20JOE%20Origens%20-%20Snake%20Eyes%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/zxvb4Cn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Iniciação </span>
								<a href="magnet:?xt=urn:btih:21b268c8a0dc63f01e0e9867a2f227b457a76f43&amp;dn=Inicicia%c3%a7%c3%a3o%202020%201080p%20BluRay%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/7mX7B6o.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sem Retorno </span>
								<a href="magnet:?xt=urn:btih:a11f1281b245514325a32237098b35c95cca167b&amp;dn=Sem%20Retorno%202020%201080p%20FULL%20HD%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/qCmgiYY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Britney x Spears </span>
								<a href="magnet:?xt=urn:btih:cb294027fd59091f1e8a243cf5e9b4beeb444332&amp;dn=Britney.Vs.Spears.2021.1080p.WEBRip.x264-RARBG&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2990&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2880&amp;tr=udp%3a%2f%2ftracker.fatkhoala.org%3a13720&amp;tr=udp%3a%2f%2ftracker.tallpenguin.org%3a15740" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/IUptBNA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Invasão Cósmica </span>
								<a href="magnet:?xt=urn:btih:c7eccd8c6dae595cf58915bd7aefc55d434845e5&amp;dn=Invas%c3%a3o%20C%c3%b3smica%202021%20BluRay%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/R4IQ3Wz.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dois + Dois </span>
								<a href="magnet:?xt=urn:btih:7a0435155fe782dbc8687d69acf948eee31e5e96&amp;dn=Dois%20%2b%20Dois%202021%20WEB-DL%201080p%20NACIONAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/dUc0LEJ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pixie </span>
								<a href="magnet:?xt=urn:btih:e026c1f36266f68c2652b49dabc0db60e50a67cd&amp;dn=Pixie%202020%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/858XpzH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lady of the Manor </span>
								<a href="magnet:?xt=urn:btih:0BEB39735D986D577FCB5DF7F555C38990D7FFD5&amp;dn=Lady.of.the.Manor.2021.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/RQ0qoaA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Levo Você Comigo </span>
								<a href="magnet:?xt=urn:btih:5555A3A27ED3EFF5301B6B65AE535C25786A5CCF&amp;dn=I.Carry.You.With.Me.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/dFngPGr.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rise of the Footsoldier: Origins </span>
								<a href="magnet:?xt=urn:btih:727B0891E5C4DE7E84438B5BF10428ED3052FB64&amp;dn=Rise.of.the.Footsoldier.Origins.2021.720p.CAMRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Zx5qI7i.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Cliff Walkers </span>
								<a href="magnet:?xt=urn:btih:DF13FAFB535E21B266D917D63F2DBC1DCA6D63E2&amp;dn=Cliff.Walkers.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ZgsejES.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Firebird </span>
								<a href="magnet:?xt=urn:btih:4422A662D107E48EBB1CF010E0470293E29493A2&amp;dn=Firebird.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/XluOZE3.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Prisioneiros da Terra Fantasma </span>
								<a href="magnet:?xt=urn:btih:49791B2E51D365BD4518339F309468885480A052&amp;dn=Prisoners.Of.The.Ghostland.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/6AsGULH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Yakuza Princess </span>
								<a href="magnet:?xt=urn:btih:0E72B3C56CE761F053DC213F8EE27246C19DA330&amp;dn=Yakuza.Princess.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/gtd70lq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Alucinação Fatal </span>
								<a href="magnet:?xt=urn:btih:96e41faea4b3d9ed85f64d06dbaf1c75ac23ffdc&amp;dn=Alucina%c3%a7%c3%a3o%20Fatal%202021%201080p%20BluRay%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/o6rsN0C.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Um Ninho para Dois </span>
								<a href="magnet:?xt=urn:btih:88cddbf3a1c244e3101813469ce1bc5014ff1738&amp;dn=Um%20Ninho%20para%20Dois%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/h7HvZVK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">My Little Pony: Nova Geração </span>
								<a href="magnet:?xt=urn:btih:57c98aff309f0d007bf6d72dc10831597a6d303c&amp;dn=My%20Little%20Pony%20-%20Nova%20Gera%c3%a7%c3%a3o%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/k38fqh9.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Menina que Matou os Pais </span>
								<a href="magnet:?xt=urn:btih:acae619253da455531310a320e6e32ab264a02b9&amp;dn=A%20Menina%20que%20Matou%20os%20Pais%202021%20WEB-DL%201080p%20NACIONAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/NjEFVqx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Menino que Matou Meus Pais </span>
								<a href="magnet:?xt=urn:btih:5c71c93fede54efb88caca9e0a44e20ab5ea89f9&amp;dn=O%20Menino%20que%20Matou%20Meus%20Pais%202021%20WEB-DL%201080p%20NACIONAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/JOoZQ8t.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pássaros de Liberdade </span>
								<a href="magnet:?xt=urn:btih:e67a1c7cea7116a8eac9bc46a6ac26a75ac3e5d1&amp;dn=P%c3%a1ssaros%20de%20Liberdade%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/fSxHG3s.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Seis Minutos para Meia</span>
								<a href="magnet:?xt=urn:btih:fd7e747cc16be8b14c88e8de93e54df0a8020c10&amp;dn=Seis%20Minutos%20para%20Meia-Noite%202020%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/t3asldx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Je Suis Karl </span>
								<a href="magnet:?xt=urn:btih:89ab7a61bcb909347c7deed1d904c7b276cbcac3&amp;dn=Je%20Suis%20Karl%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/dtn6UMS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Gangue </span>
								<a href="magnet:?xt=urn:btih:f51da0c094651ba1260365c6b8d2f102207e8d2f&amp;dn=A%20Gangue%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/38NEsnh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Aceleração Máxima </span>
								<a href="magnet:?xt=urn:btih:58ef03db4d8cf83837f876c51aa8bd787cab713f&amp;dn=Acelera%c3%a7%c3%a3o%20M%c3%a1xima%202019%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Xcxqwiw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sou Vingança: Retaliação </span>
								<a href="magnet:?xt=urn:btih:66312ef9649aa8b72cb76cc0df8dc09d59865cee&amp;dn=Sou%20Vingan%c3%a7a%20-%20Retalia%c3%a7%c3%a3o%202020%20BluRay%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/pUJx9Jn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Charlatão </span>
								<a href="magnet:?xt=urn:btih:3a8800dbcde9b6f073981bd04240baf81053237d&amp;dn=O%20Charlat%c3%a3o%202020%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/k4FCrdU.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Caminhos da Memória </span>
								<a href="magnet:?xt=urn:btih:f4cc6315c0476984027647a8e9ed0eab581919e1&amp;dn=Caminhos%20da%20Mem%c3%b3ria%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/2p0UKXc.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Intrusion </span>
								<a href="magnet:?xt=urn:btih:cc37ed23c764b61d99e0ce084e54b8aad6041654&amp;dn=Intrusion%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/SCUnoTr.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Confissões de uma Garota Excluída </span>
								<a href="magnet:?xt=urn:btih:90752fd4501089b4cc3b23cc414d8439072544a0&amp;dn=Confessions.of.an.Invisible.Girl.2021.PORTUGUESE.1080p.WEBRip.x264-VXT&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2960&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2950&amp;tr=udp%3a%2f%2ftracker.slowcheetah.org%3a14770&amp;tr=udp%3a%2f%2ftracker.tallpenguin.org%3a15750" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/FvpC83U.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">War of the Worlds </span>
								<a href="magnet:?xt=urn:btih:0827bc24a04f7598ae17a6e660b6755f447a3a26&amp;dn=The.War.of.the.Worlds.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/holkEeo.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Descarrilados </span>
								<a href="magnet:?xt=urn:btih:7de5670bcaed12cd28e96f23fb2e5d9416146564&amp;dn=Descarrilados.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/tZn45lw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Last House on the Street </span>
								<a href="magnet:?xt=urn:btih:414cb7413850039e4f647bd58675293f173e3d8e&amp;dn=The.Last.House.on.the.Street.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/IyDSyfw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Copshop </span>
								<a href="magnet:?xt=urn:btih:939db32481184bed55baa8f8bc7bb6971e39eea1&amp;dn=Copshop.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/h9kndjd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Plan A </span>
								<a href="magnet:?xt=urn:btih:deefc261c312db7ced1241d787a1e6e38e4944ef&amp;dn=Plan.a.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/o1A9q4p.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Show </span>
								<a href="magnet:?xt=urn:btih:68f6526e202873c4727e20874933bb2335468fec&amp;dn=The.Show.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/CJyWCic.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Live or Let Die </span>
								<a href="magnet:?xt=urn:btih:02e3f8bfab7fe1df52e29bbab3dbc31440991b08&amp;dn=Live.or.Let.Die.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/rOwSOUc.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kilit </span>
								<a href="magnet:?xt=urn:btih:79f90c8424846c233df40491b8cf77b8114a069f&amp;dn=Kilit.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/FefZYA6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Escape from Area 51 </span>
								<a href="magnet:?xt=urn:btih:b7674ca9cd2cd67de12f10eed090423419cd32a0&amp;dn=Escape.From.Area.51.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/tlqteHY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">We Need to Do Something </span>
								<a href="magnet:?xt=urn:btih:1829b89ec14f4bff0e5526e5dee64de51cac4fd7&amp;dn=We.Need.to.Do.Something.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/i2XzNhs.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Baby Money </span>
								<a href="magnet:?xt=urn:btih:fb686f6959bfddc3ea168d50cb5714760b9ffdb5&amp;dn=Baby.Money.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/PyfL3yw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Stairs </span>
								<a href="magnet:?xt=urn:btih:7b8511a11af440f8932befe7a52caf084368f3f3&amp;dn=The.Stairs.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/pCJzp64.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Danger in the Spotlight </span>
								<a href="magnet:?xt=urn:btih:75038f77424a7f48d98491547524ea64d4671be1&amp;dn=Danger.in.the.Spotlight.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/9FIxyKv.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Duna </span>
								<a href="magnet:?xt=urn:btih:20e4d914016b58271d640ac0ac82de97b106e404&amp;dn=Dune.2021.1080p.HDRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/u5DfHzo.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Eternos </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/I9e6LhX.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Zone 414 </span>
								<a href="magnet:?xt=urn:btih:26d236c1830cc2408886b3f9c90ebacc9b58da16&amp;dn=Zone.414.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Z3W5hTU.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Wild Indian </span>
								<a href="magnet:?xt=urn:btih:0d216f68c3dee048075ff773abc991b1ad7c266e&amp;dn=Wild.Indian.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/aO4WwoD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Uploaded </span>
								<a href="magnet:?xt=urn:btih:20e516046e5d9cfc6f32f1b6f66a4b89d78a9f9f&amp;dn=Uploaded.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/QZfovbj.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Toll </span>
								<a href="magnet:?xt=urn:btih:7ee9b6ad84701f50a85dd9dbeb0cb5a4baeae4a8&amp;dn=The.Toll.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/uQhPYqG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Small City </span>
								<a href="magnet:?xt=urn:btih:661dc3fa848e49c7530c388e119a0fb605bacf0f&amp;dn=Small.City.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/X3S4ZqH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Man vs Bigfoot </span>
								<a href="magnet:?xt=urn:btih:e663f916c9b58b4bfeebec0c9e997161f2284d7f&amp;dn=Man.vs.Bigfoot.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/tYNV1ck.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Last Journey of the Vikings 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:16a256379291ebbeba83fa6fa51a41500430ca86&amp;dn=The.Last.Journey.Of.The.Vikings.S01.720p.WEBRip.AAC2.0.x264-CBFM%5beztv.re%5d&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337&amp;tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/8zf5KZf.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Burial Ground Massacre </span>
								<a href="magnet:?xt=urn:btih:e553cbada6a290b68fa3a133e3393cc1b33639d6&amp;dn=Burial.Ground.Massacre.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/JNjHqqz.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Girl in Cabin Thirteen </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ViII6rq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Forever Room </span>
								<a href="magnet:?xt=urn:btih:7cfb1b38854ab15adf74c9c83af81b684997524e&amp;dn=The.Forever.Room.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/gHvM9Bh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Summertime </span>
								<a href="magnet:?xt=urn:btih:4116c76741c6d4e8d73cfc4ac0a5956238cfd873&amp;dn=Summertime.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/dIvZtD1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Outlaw's Buckle </span>
								<a href="magnet:?xt=urn:btih:4e4cde594e54e05ef858a2d9b47fbc09a46deff9&amp;dn=Outlaws.Buckle.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/az9BgpK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Holiday Monday </span>
								<a href="magnet:?xt=urn:btih:0daf56649e6baae33b2be497fc599bbae497223b&amp;dn=Holiday.Monday.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/gAzxLR4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Agua dos Porcos </span>
								<a href="magnet:?xt=urn:btih:c218940a8e4de9061b6aac15033a5116a2a8cbd5&amp;dn=Agua.dos.Porcos.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/WrvK52d.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Auto da Boa Mentira </span>
								<a href="magnet:?xt=urn:btih:5067dc2749a31a6cf37db518ee0c6a82814e00b7&amp;dn=O%20Auto%20da%20Boa%20Mentira%202021%20WEB-DL%201080p%20NACIONAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/yH8s3oh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Um Casal Inseparável </span>
								<a href="magnet:?xt=urn:btih:a54da641e30b6e2a5928f5ff6060dbb3096924be&amp;dn=Um%20Casal%20Insepar%c3%a1vel%202021%20WEB-DL%201080p%20NACIONAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/nsfreXm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Guerra de Likes </span>
								<a href="magnet:?xt=urn:btih:14eb7a0fea56c2a12014260f55af234777d14851&amp;dn=Guerra%20de%20Likes%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/djTEdZb.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Homem nas Trevas 2 </span>
								<a href="magnet:?xt=urn:btih:4dd1926b4c6a366a39a5e6751c7628c39572be03&amp;dn=O%20Homem%20nas%20Trevas%202%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/wRc1cwR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Newsreader 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:dc69adf8f95f3f6a2d2f7750e371ca1579842379&amp;dn=The.Newsreader.S01E01.720p.HDTV.x264-ORENJI%5brartv%5d&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2840&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2960&amp;tr=udp%3a%2f%2ftracker.thinelephant.org%3a12760&amp;tr=udp%3a%2f%2ftracker.slowcheetah.org%3a14770" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/SQdR0VG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lindo de Morrer </span>
								<a href="magnet:?xt=urn:btih:fdb4d26a6a148ef8fe263f918883ce0946100883&amp;dn=Lindo%20de%20Morrer%202020%20WEB-DL%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/i4qjQeB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Stronghold (BAC Nord) </span>
								<a href="magnet:?xt=urn:btih:90945a9c3ac9f859fa24fc018f0b58bceacc4d6f&amp;dn=BAC%20Nord%20-%20Sob%20Press%c3%a3o%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/JCcd3tp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Refém Rebelde </span>
								<a href="magnet:?xt=urn:btih:81e5ad3fe1afe97337804b92ab1ac4cd1a595539&amp;dn=Ref%c3%a9m%20Rebelde%202021%20BluRay%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/accEa13.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Crisis </span>
								<a href="magnet:?xt=urn:btih:d504d4b4f8a64e8e0b558cff83ce49628046e25f&amp;dn=Crisis%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/xztFz3y.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">He</span>
								<a href="magnet:?xt=urn:btih:834508dc4905086060a1d99eeccc77797222b9f2&amp;dn=He-Man.and.the.Masters.of.the.Universe.2021.S01.1080p.WEB-DL.DD5.1.DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/UKcmdsG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Whaler Boy / Kitoboy </span>
								<a href="magnet:?xt=urn:btih:E6D3E2AFF0FABBE7FE25568723856CE2F2715E8C&amp;dn=The.Whaler.Boy.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/BeKfYhS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Dia da Destruição </span>
								<a href="magnet:?xt=urn:btih:E3045B741CC0A162B6F65E8B8C58AC22696F1A25&amp;dn=The.Day.of.Destruction.2020.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/4rfdAHA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sublet </span>
								<a href="magnet:?xt=urn:btih:ADBD34A0B41BA351AFEB090B20B7508425A6DC09&amp;dn=Sublet.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/NpK9HGE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sons of ‘Ndrangheta (Liberi di scegliere) </span>
								<a href="magnet:?xt=urn:btih:F94960B80ABC74ABD599A660399A8327E014E132&amp;dn=Sons.Of.Ndrangheta.2019.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/oSwze3s.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Alguma Coisa de Útil </span>
								<a href="magnet:?xt=urn:btih:23CEED1F393B75FFF8501A664DEC1346E14C1F61&amp;dn=Something.Useful.2017.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Kuylowi.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sitting in Limbo </span>
								<a href="magnet:?xt=urn:btih:600C14C5C65EA7E7BC2C5EFEF917877C8329A7BD&amp;dn=Sitting.In.Limbo.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/cukATo5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rewind </span>
								<a href="magnet:?xt=urn:btih:844CF8A13A61B2930280BA4D3049A3C7DE255CA7&amp;dn=Rewind.2019.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/wozk7Tq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Nós Duas </span>
								<a href="magnet:?xt=urn:btih:6004B526AE1626998B6B5B07400E8285E3F2C72A&amp;dn=Two.of.Us.2019.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/WESanOV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Maid </span>
								<a href="magnet:?xt=urn:btih:8F13BD1713AB5EE91E4EDD7D08B47C6B59564B7F&amp;dn=The.Maid.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/3iDUczc.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Algum Lugar Especial </span>
								<a href="magnet:?xt=urn:btih:9138D0731E768CC809678854A6C63EE351746BF9&amp;dn=Nowhere.Special.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ekMtxyy.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ninguém Está Olhando </span>
								<a href="magnet:?xt=urn:btih:322167C5CF94F9F956B65A65E61C7B2BE40DEA1B&amp;dn=Nobodys.Watching.2017.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/JDeNwTq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Meu Pai, O Espião </span>
								<a href="magnet:?xt=urn:btih:A99C5DA8456350B190CEEF8407047ABAD0543950&amp;dn=My.Father.the.Spy.2019.720p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/kYItMLX.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Dona do Barato </span>
								<a href="magnet:?xt=urn:btih:984D9266035DC03BC7B2736E0B74568F515DDB36&amp;dn=Mama.Weed.2020.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/oZjSAU2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lost Heart </span>
								<a href="magnet:?xt=urn:btih:DC2B56C0BB447B7C4E0FC41BA0A784C5412428A1&amp;dn=Lost.Heart.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/CIu9ZoQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pedra Solitária </span>
								<a href="magnet:?xt=urn:btih:967CDEDC4EA6E54547CA2CBEC1774EE4A23320B7&amp;dn=Lonely.Rock.2020.720p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ERTLxWD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">As Irmãs Macaluso </span>
								<a href="magnet:?xt=urn:btih:A52320F2EC50EBC10549211F5D51BF36A47FAE72&amp;dn=Le.sorelle.Macaluso.2020.1080p.BDRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/pSxjjpA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Iceland Is Best </span>
								<a href="magnet:?xt=urn:btih:F090605185B47DE1A4DA0E9AB59DBBFA0B3100A2&amp;dn=Iceland.Is.Best.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/oQQD5vu.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sua Vida Secreta </span>
								<a href="magnet:?xt=urn:btih:D4507B6E71AF4C1A4EDD0747B2DDA714115BE4F6&amp;dn=Et.Mon.Coeur.Transparent.2018.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/w9PMQLd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Balão </span>
								<a href="magnet:?xt=urn:btih:907FF3FCB249E9C318E309DF8FEB8BF64AD3D6F6&amp;dn=Balloon.2019.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/x1X0Ch1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Assassins </span>
								<a href="magnet:?xt=urn:btih:5A3465D2AADBBC17DE896C8F6BBB8F5E25F9AA80&amp;dn=Assassins.2020.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/HnjoSOB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">An Unknown Compelling Force </span>
								<a href="magnet:?xt=urn:btih:70817EFFDDC4AE987348C11032EA57952C200D93&amp;dn=An.Unknown.Compelling.Force.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/B8wBhrc.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Feitiço das Trevas </span>
								<a href="magnet:?xt=urn:btih:1C706F45DF7FBC44EB895A2549B7EE15D0547BA9&amp;dn=Dark.Spell.2021.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/0zBzLZv.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Todos Estão Falando Sobre Jamie </span>
								<a href="magnet:?xt=urn:btih:7f001ff4080d2fdc8d977fa72c71af7a3dac7957&amp;dn=Todos%20Est%c3%a3o%20Falando%20Sobre%20Jamie%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ldHixXp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Pai que Move Montanhas </span>
								<a href="magnet:?xt=urn:btih:4e0bffa5b3ee4d87f5dd7a785b3e906c9ce78695&amp;dn=O%20Pai%20que%20Move%20Montanhas%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/suVKIeQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Baile das Loucas </span>
								<a href="magnet:?xt=urn:btih:0f1b39ca81bfb440c44e22a452bae02ea7430d7b&amp;dn=O%20Baile%20das%20Loucas%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/mrrr2S8.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sex Education 3ª Temporada </span>
								<a href="magnet:?xt=urn:btih:c47df2684760a8354bba7e78ad0f7d17619df6d2&amp;dn=Sex.Education.S03.720p.NF.WEBRip.DDP5.1.x264-AGLET%5brartv%5d&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2780&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2900&amp;tr=udp%3a%2f%2ftracker.fatkhoala.org%3a13710&amp;tr=udp%3a%2f%2ftracker.tallpenguin.org%3a15780" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/KCMiVd6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Sequestro de Daniel Rye </span>
								<a href="magnet:?xt=urn:btih:e5ec409bc7f4040848c6f37314ce347e760ec59c&amp;dn=O%20Sequestro%20de%20Daniel%20Rye%202021%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/uIw9HRX.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">É Para o Seu Próprio Bem </span>
								<a href="magnet:?xt=urn:btih:5085810595712cbce990bdd122bba24c76366111&amp;dn=%c3%89%20Para%20o%20Seu%20Proprio%20Bem%202021%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/tg18dMD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Lenda de Candyman </span>
								<a href="magnet:?xt=urn:btih:d20af9d576649ed6bc526a782c0e906344d59854&amp;dn=Candyman.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/7My7DFk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Schumacher </span>
								<a href="magnet:?xt=urn:btih:201c0c1b52cdb7a5004f83919b346281f14f510b&amp;dn=Schumacher%202021%201080p%20WEBRip%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/2gX8YEn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Noitários de Arrepiar </span>
								<a href="magnet:?xt=urn:btih:41c894b21732e67b2e8d161f6ab3b6b2850f3063&amp;dn=Noitarios%20de%20Arrepiar%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/MBzSpdT.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ilhados </span>
								<a href="magnet:?xt=urn:btih:aadce0b01c065a378439aed75133f3f335fef9e2&amp;dn=Ilhados%202021%201080p%20WEB-DL%20NACIONAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/vNlpzHE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ofélia </span>
								<a href="magnet:?xt=urn:btih:f2ff486168415d88e97804f2d6ec03ee9e25fb77&amp;dn=Of%c3%a9lia%202019%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/FjpvTTn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Diretamente de Lugar Nenhum: Scooby</span>
								<a href="magnet:?xt=urn:btih:11c09bf30a075c977c587169b61aba5b53de54bb&amp;dn=Diretamente.de.Lugar.Nenhum-Scooby-Doo.Encontra.Coragem.2021.WEB-DL.1080p.DUAL.5.1&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/jpFpXfi.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Renascida do Inferno </span>
								<a href="magnet:?xt=urn:btih:2e4b8c865d65136ff283deb380a2d994b2f636d4&amp;dn=Renascida.do.Inferno.2015.BRRip.1080p.x264.DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/yM7Sugk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Vovó Babá </span>
								<a href="magnet:?xt=urn:btih:de5452ffe6d7dafe21cdce4a34be9e4e862312e7&amp;dn=Vov%c3%b3%20Bab%c3%a1%202020%20WEB-DL%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/QNns8r7.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Four Good Days </span>
								<a href="magnet:?xt=urn:btih:3659D8EDD4BED3445BCD3F568FC6A670B872BAF2&amp;dn=Four.Good.Days.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/mR6PXqd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Fantasmas do Abismo </span>
								<a href="magnet:?xt=urn:btih:Q44HRAXXQYZ2YHBJDN7PPNRYSGPRXJ2G&amp;dn=Fantasmas%20do%20Abismo%202003%20WEB-DL%201080p%20DUAL%202.0&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/oLUaRq3.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Loop </span>
								<a href="magnet:?xt=urn:btih:TBMO2YMIUICZKLOSZD4I55F5RWPQCZTZ&amp;dn=Loop%202021%20WEB-DL%201080p%20NACIONAL%202.0&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/YqRpIS6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Buscador </span>
								<a href="magnet:?xt=urn:btih:LEDITKPFM6FR3OKDSL52P4NPIRQQB5TD&amp;dn=O%20Buscador%202021%20WEB-DL%201080p%20NACIONAL%202.0&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/iyORyrB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Don't Tell a Soul </span>
								<a href="magnet:?xt=urn:btih:954ea84ba262f30f8ab6f2f1e64fcead740bb2f3&amp;dn=Don%27t%20Tell%20a%20Soul%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/j6hZD1h.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Stoker Hills </span>
								<a href="magnet:?xt=urn:btih:BA9F92263080A951CE9FF6E4F9D5959D48C73138&amp;dn=Stoker.Hills.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/gIfkJl4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">No Man of God </span>
								<a href="magnet:?xt=urn:btih:D5C70002D13C863FB477D9073E2F7164648EFC1F&amp;dn=No.Man.of.God.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/lHeMIa5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Operation Bangkok (a.k.a. Heroes Return) </span>
								<a href="magnet:?xt=urn:btih:B4BBCB3C803B0889F4D7D9F894EBB47AA89FA70F&amp;dn=Heroes.Return.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/2np6O9q.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">American Sausage Standoff (Gutterbee) </span>
								<a href="magnet:?xt=urn:btih:8B88C1649C97B80F8B5167F1A8F777D4939D53EA&amp;dn=Gutterbee.2019.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/xJLQCYF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Wild Man: Skunk Ape </span>
								<a href="magnet:?xt=urn:btih:657fc5d210e6cb42aa864d832896f8b17f5e8792&amp;dn=The.Wild.Man.Skunk.Ape.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/p3tiorY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rushed </span>
								<a href="magnet:?xt=urn:btih:d79c4dd5a6b5da571e7b517d65c8a65a14e2564b&amp;dn=Rushed.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/18JuFgS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Shang</span>
								<a href="magnet:?xt=urn:btih:de1250317890f41719ca76e676ba3f7231ab53f2&amp;dn=Shang.Chi.and.the.Legend.of.the.Ten.Rings.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/o8RmKuH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Jurassic Shark 2: Aquapocalypse </span>
								<a href="magnet:?xt=urn:btih:973f2702db9941a90ffd4845d7c9229a7af56d1f&amp;dn=Jurassic.Shark.2.Aquapocalypse.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/bWWndFq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Cavaleiro do Dragão </span>
								<a href="magnet:?xt=urn:btih:e6404b20d1318e9f3cf3fd3062979d9024e799b5&amp;dn=O%20Cavaleiro%20do%20Drag%c3%a3o%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/SJFlaSy.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mosquito State </span>
								<a href="magnet:?xt=urn:btih:dc41fd7bf346348fae9c74b5d8db26b178ee2694&amp;dn=Mosquito.State.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/BdQRyXF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Preço da Ganância </span>
								<a href="magnet:?xt=urn:btih:ca33397fda1bb5c5b94ce0a1f0298700b248b182&amp;dn=%20-%20O%20Pre%C3%A7o%20da%20Gan%C3%A2ncia%202020%205.1%20(720p)%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker4.piratux.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2ft2.pow7.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.yify-torrents.com%3a80%2fannounce&amp;tr=http%3a%2f%2fwww.h33t.com%3a3310%2fannounce&amp;tr=http%3a%2f%2fexodus.desync.com%2fannounce&amp;tr=http%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2fbt.careland.com.cn%3a6969%2fannounce&amp;tr=http%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.istole.it%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.blazing.de%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.yify-torrents.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.prq.to%2fannounce&amp;tr=udp%3a%2f%2ftracker.1337x.org%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.com%3a2740%2fannounce&amp;tr=udp%3a%2f%2ftracker.ex.ua%3a80%2fannounce&amp;tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&amp;tr=udp%3a%2f%2f12.rarbg.me%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f11.rarbg.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce&amp;tr=udp%3a%2f%2ffr33dom.h33t.com%3a3310%2fannounce&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Ai1PkM6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Hostage House </span>
								<a href="magnet:?xt=urn:btih:D4553DC148F756704BDCE0BDF3722886F1B3BE3D&amp;dn=Hostage.House.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/xBGnZyF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Death Rider in the House of Vampires </span>
								<a href="magnet:?xt=urn:btih:E2C0836D0C22D13DF8C71E960579E7FB20514E3F&amp;dn=Death.Rider.in.the.House.of.Vampires.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/m3orLaP.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">rance  </span>
								<a href="magnet:?xt=urn:btih:dcded8b8e4885afabd1bb86b51124ad9491f260d&amp;dn=Agua.dos.Porcos.2020.720p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/OZfSYvB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Echoes of Violence </span>
								<a href="magnet:?xt=urn:btih:1B3ACBEAD44C14ED4B7565CCD1320DEA430E5B84&amp;dn=Echoes.of.Violence.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/M7My4jb.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Defining Moments </span>
								<a href="magnet:?xt=urn:btih:2870c3a7a1414e4e131416bb1584742e644c2280&amp;dn=Defining.Moments.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/u6XAamN.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Astro Loco </span>
								<a href="magnet:?xt=urn:btih:773F0675607FFF097CA1C58C65E927952E80F26C&amp;dn=Astro.Loco.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/NVfSPgW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Bearry </span>
								<a href="magnet:?xt=urn:btih:B1B02B9E81098CE1673B65CD1CE79DF3C901963A&amp;dn=Bearry.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/WHtyiX8.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Caçada Humana </span>
								<a href="magnet:?xt=urn:btih:ESSAKOSVPLER56S5VCNGKHHX7DYTH7J2&amp;dn=Ca%C3%A7ada%20Humana%201966%20BluRay%201080p%20DUAL%202.0&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/yKBYX16.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Armadilha do Caçador </span>
								<a href="magnet:?xt=urn:btih:b1d8ca7f13862cac3d7ae55829aee7a6d2f98b8e&amp;dn=Armadilha%20do%20Ca%c3%a7ador%202019%20BluRay%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/UdUHFuN.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Caça Invisível </span>
								<a href="magnet:?xt=urn:btih:51798160ec680613e18fee561cdd0fbc691c0554&amp;dn=Caca%20Invisivel%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/9s4LDSe.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kate </span>
								<a href="magnet:?xt=urn:btih:af92651012d493722e01c182fd90719935227812&amp;dn=Kate%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/74CTeWh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Observadores </span>
								<a href="magnet:?xt=urn:btih:7d9b7b9de662f8442d316d019f5fe7011284eaf5&amp;dn=Observadores%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/47B5uPB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Irmãos de Sangue: Muhammad Ali e Malcolm X </span>
								<a href="magnet:?xt=urn:btih:59f22361869486fc4118e90dd65cd3bf20560378&amp;dn=Irm%c3%a3os%20de%20Sangue%20-%20Muhammad%20Ali%20e%20Malcolm%20X%202021%20WEB-DL%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/kR4sFsd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Spirit: O Indomável </span>
								<a href="magnet:?xt=urn:btih:e018c6ca39ef46f11105de33003c533b47abca32&amp;dn=Spirit%20-%20O%20Indom%c3%a1vel%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/oMmDKS8.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Elas Contra o Serial Killer </span>
								<a href="magnet:?xt=urn:btih:aa8af41aadf5fab0ee3f88de20cc62c405174c8f&amp;dn=Elas%20Contra%20o%20Serial%20Killer%202021%201080p%20WEB-DL%20DUBLADO%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/kFwrzJL.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">JJ+E </span>
								<a href="magnet:?xt=urn:btih:8c9dfcc5921d9195b3e4d8df95eeac7c2c1a343d&amp;dn=JJ%2bE%202021%201080p%20WEB-DL%20DUBLADO%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/j0ZHWtC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Talk</span>
								<a href="magnet:?xt=urn:btih:8a9c8b490fe23d2fc65a4065fa51df04b5f0a151&amp;dn=Talk-Show%20-%20Reinventando%20a%20Com%c3%a9dia%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/d2UoOVB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Paper Tiger </span>
								<a href="magnet:?xt=urn:btih:8330b91f23552d79786f2c50fa3c8576626d0ba1&amp;dn=Paper.Tiger.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/iaBvXcR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Annette </span>
								<a href="magnet:?xt=urn:btih:b93592cbe302e23a3329fcf732dcdad1150e4590&amp;dn=Annette.2021.1080p.WEBRip.x264-RARBG&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2900&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2910&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12750&amp;tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15760" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/MESyoMU.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Programada para Matar </span>
								<a href="magnet:?xt=urn:btih:038c68510f35259ab68239e3bb0bbda18f4b8cdd&amp;dn=Programada%20para%20Matar%202021%20WEB-DL%201080p%20DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/gZNibBr.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">L.O.C.A. </span>
								<a href="magnet:?xt=urn:btih:b6ef5b6db0e7d0c33bc76daa207f4d58d444d9e9&amp;dn=L.O.C.A.%202021%20WEB-DL%201080p%20NACIONAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/FgoQdG2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Rei dos Ladrões </span>
								<a href="magnet:?xt=urn:btih:3778f2a31ddc4726dd5f43f3d1b536dc046f6922&amp;dn=O.Rei.dos.Lad%c3%b5es.2009.BRRip.1080p.x264.DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/cWmOzus.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">After 3 </span>
								<a href="magnet:?xt=urn:btih:4A9269B842619C64522F2E9222217F919F500337&amp;dn=After.We.Fell.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/92WSVm5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">3 Women (Respect) </span>
								<a href="magnet:?xt=urn:btih:ea69e1d17013ea07c617a5d5782dbc311f8f1ea4&amp;dn=Respect.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/DlHcjGb.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Really Love </span>
								<a href="magnet:?xt=urn:btih:ccc949863a112b5cb6d0ae61bf470419f95569d4&amp;dn=Really%20Love%202020%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/i1QGvIE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Willy's Wonderland: Parque Maldito </span>
								<a href="magnet:?xt=urn:btih:d3a91b391012ed48e7bf2224bceb71b74cd58475&amp;dn=Willy%e2%80%99s%20Wonderland%20-%20Parque%20Maldito%202021%20WEB-DL%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/nhilYvS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Minari: Em Busca da Felicidade </span>
								<a href="magnet:?xt=urn:btih:b9e6ae96d657cbaee2fdeb0f0ae4b611996813f0&amp;dn=Minari%20-%20Em%20Busca%20da%20Felicidade%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/UVxHRXs.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Nuvem Rosa </span>
								<a href="magnet:?xt=urn:btih:36164a43b2ea0036dfe422e3055671d7f2b2d6e0&amp;dn=A%20Nuvem%20Rosa%202021%20WEB-DL%201080p%20NACIONAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/d14SMpS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Águas Negras </span>
								<a href="magnet:?xt=urn:btih:4820edabaaaae096bd829610f2d77f323305b6c8&amp;dn=%c3%81guas%20Negras%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/ikT119D.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Demais pra Mim </span>
								<a href="magnet:?xt=urn:btih:a81cc05066b5ffeeb08f104307045b6123389cf1&amp;dn=Demais%20pra%20Mim%202020%20WEB-DL%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/kUfvqnd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rouge (Red Soil) </span>
								<a href="magnet:?xt=urn:btih:96cc3b91e241388d42d533ff9720933f245d9232&amp;dn=Rouge.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/i3iWCNh.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Risen </span>
								<a href="magnet:?xt=urn:btih:9defce25e37bfc0c97701273b965e62832647620&amp;dn=Risen.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/HovSfjc.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Overrun </span>
								<a href="magnet:?xt=urn:btih:4849a973c65a9043ba77de00aafd19d02e142236&amp;dn=Overrun.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/tTjCKFx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Caçada Jurássica </span>
								<a href="magnet:?xt=urn:btih:1206a6533c0f88d2084de22b4c1c58dd2df22649&amp;dn=Jurassic.Hunt.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/f0sXC17.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Incision </span>
								<a href="magnet:?xt=urn:btih:9b9fd9cb35a92f9b4233e35e768b75e1e2c9065c&amp;dn=Incision.2020.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/tRboKlH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ghibah </span>
								<a href="magnet:?xt=urn:btih:561455ead01e1358eadc096f96ed35c83cddb3db&amp;dn=Ghibah.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/GY7CKSK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Friendsgiving </span>
								<a href="magnet:?xt=urn:btih:ba19b76edf054da9b317039018fd63bafa6a7ccd&amp;dn=Friendsgiving.2020.720p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/8WsOeiN.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Flag Day </span>
								<a href="magnet:?xt=urn:btih:db05c16f424b0bdcf7ad3f272d2ae1bcb225499d&amp;dn=Flag.Day.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/a1m83OX.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Attention au départ </span>
								<a href="magnet:?xt=urn:btih:fab7926cdf036f5060d01a65ece38393b09060cb&amp;dn=Attention.au.depart.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/PI7id3F.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Eminence Hill </span>
								<a href="magnet:?xt=urn:btih:41c23123ab19908f8c02a6bf9bc0db9b3158e004&amp;dn=Eminence.Hill.2019.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/2lmn5ir.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Crazy Samurai Musashi </span>
								<a href="magnet:?xt=urn:btih:f72b038a040aa09692e81e6427646e2d020c3d6c&amp;dn=Crazy.Samurai.Musashi.2020.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/EY4SYlE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Water 2: The Cleansing </span>
								<a href="magnet:?xt=urn:btih:316616912c3f6ca8ff1778b530d29e52b0f4f2c6&amp;dn=Water.2.The.Cleansing.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/7X90zW5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">ESPIRAL </span>
								<a href="magnet:?xt=urn:btih:c58f5681e25d0ba4fe0fc41810821e9abc919356&amp;dn=Espiral%20-%20O%20Legado%20de%20Jogos%20Mortais%202021%20BluRay%20720p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/UptygY1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mortal Kombat Legends: A Batalha dos Reinos </span>
								<a href="magnet:?xt=urn:btih:ee8888ec04081ec90ce7f538a32b3500e5970eec&amp;dn=Mortal%20Kombat%20Legends%20-%20A%20Batalha%20dos%20Reinos%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/aDiubBk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Batman: O Longo Dia das Bruxas, Parte 2 </span>
								<a href="magnet:?xt=urn:btih:58eb8e1753c50177c340019c6aeaa6f1365dba56&amp;dn=Batman%20-%20O%20Longo%20Dia%20das%20Bruxas%20%e2%80%93%20Parte%202%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/lTL1fNC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Quanto Vale? </span>
								<a href="magnet:?xt=urn:btih:f452b22b53526d83d971034d05214db1ccbc233f&amp;dn=Worth.2020.1080p.NF.WEB-DL.x265.10bit.HDR.DDP5.1-TEPES&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2820&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2990&amp;tr=udp%3a%2f%2ftracker.fatkhoala.org%3a13750&amp;tr=udp%3a%2f%2ftracker.slowcheetah.org%3a14720" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/nXJWGoe.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Cinderela </span>
								<a href="magnet:?xt=urn:btih:f9cbb626ee904b0cae9ebfb5656c4840e88dc3df&amp;dn=Cinderela%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/gI0PjL1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Esticando a Festa </span>
								<a href="magnet:?xt=urn:btih:dc90d1475b5db167f1fdf97fbe08d8e23990a7d1&amp;dn=Esticando%20a%20Festa%202021%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/fB1JJ8n.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Como Virar um Cowboy 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:e0fd5615f833c4395658983227ca680324204a16&amp;dn=Como.Virar.um.Cowboy.S01.2021.1080p.WEB-DL.DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/1ZqtC9j.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">12 Órfãos Poderosos </span>
								<a href="magnet:?xt=urn:btih:c1de4ac2fe50c7d57ae83c5bfa1527d69082a33f&amp;dn=12%20%c3%93rf%c3%a3os%20Poderosos%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/F74798t.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Maldição de Rose </span>
								<a href="magnet:?xt=urn:btih:95A7A3CEB81F713648270B9D50CA208813E7082A&amp;dn=The.Dawn.2019.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/dBbfnLT.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Protegida </span>
								<a href="magnet:?xt=urn:btih:517e16cd2571c9e1fa1d6982077d7067e235689e&amp;dn=The.Protege.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/DhEGZcK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Demonic </span>
								<a href="magnet:?xt=urn:btih:8218BA90C4FB7CAEE93B2FBB5BA40E252F5FB99F&amp;dn=Demonic.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/MuWcdxA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mind Talker </span>
								<a href="magnet:?xt=urn:btih:55f8d78f7f223f6ffce27b2c59d7c7ef75c6f84b&amp;dn=Mind.Talker.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/lCdtQui.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Girl Who Got Away </span>
								<a href="magnet:?xt=urn:btih:8533256f968d96244fa24d0580dd4e45e15e4713&amp;dn=The.Girl.Who.Got.Away.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Zul8XUq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Foster Boy </span>
								<a href="magnet:?xt=urn:btih:ab8142fa53db99aa6974489a1d387530f9957f74&amp;dn=Foster.Boy.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/wnu3cXN.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Out of Time </span>
								<a href="magnet:?xt=urn:btih:8241ff1974263d1dc409649010f21401307e4bb1&amp;dn=Out.of.Time.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/EMsPNQZ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sinister Sorority </span>
								<a href="magnet:?xt=urn:btih:52da67ce9f062c5028bfe8da444ddefca25bd54b&amp;dn=Sinister.Sorority.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/39iX85y.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Demented </span>
								<a href="magnet:?xt=urn:btih:77180f1a7da12be7cde88871729161b86ee0c701&amp;dn=Demented.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/RVjBHkz.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Charming the Hearts of Men </span>
								<a href="magnet:?xt=urn:btih:89141cbc9b524b367785552c932866bf18e6aff7&amp;dn=Charming.the.Hearts.of.Men.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/y8xQy1k.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Miraculous World: Xangai </span>
								<a href="magnet:?xt=urn:btih:ebcc51822b8e21588e702f46f839d183ced9b88c&amp;dn=Miraculous%20World%20Xangai%20-%20A%20Lenda%20de%20LadyDragon%202021%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/k6C1l2M.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">idade de Mentiras </span>
								<a href="magnet:?xt=urn:btih:5bc70d30c2957239e1680a288287e063baf65088&amp;dn=Cidade%20de%20Mentiras%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/7Q1Ailq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Maldição da Floresta </span>
								<a href="magnet:?xt=urn:btih:c2aed8f7288c8df1e92bf3345e843c2a2836b9da&amp;dn=A%20Maldi%c3%a7%c3%a3o%20da%20Floresta%202015%201080p%20BluRay%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/AufmdnL.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Limetown 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:f174ccd34f4ee4b3158f8900e0e261840c458a7b&amp;dn=Limetown.S01.WEBRip.x264-ION10&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2980&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2850&amp;tr=udp%3a%2f%2ftracker.fatkhoala.org%3a13780&amp;tr=udp%3a%2f%2ftracker.slowcheetah.org%3a14770" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/yPS5h1C.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mortal Kombat Legends: A Vingança de Scorpion </span>
								<a href="magnet:?xt=urn:btih:772d68e164740ae78754afdf6015e5f6c098d804&amp;dn=COMANDO.TO%20-%20Mortal%20Kombat%20Legends%20-%20A%20Vingan%c3%a7a%20de%20Scorpion%202020%20%5b720p%5d%20%5bDUAL%5d&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker4.piratux.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2ft2.pow7.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.yify-torrents.com%3a80%2fannounce&amp;tr=http%3a%2f%2fwww.h33t.com%3a3310%2fannounce&amp;tr=http%3a%2f%2fexodus.desync.com%2fannounce&amp;tr=http%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=http%3a%2f%2fbt.careland.com.cn%3a6969%2fannounce&amp;tr=http%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.istole.it%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.blazing.de%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.yify-torrents.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.prq.to%2fannounce&amp;tr=udp%3a%2f%2ftracker.1337x.org%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.com%3a2740%2fannounce&amp;tr=udp%3a%2f%2ftracker.ex.ua%3a80%2fannounce&amp;tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&amp;tr=udp%3a%2f%2f12.rarbg.me%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f11.rarbg.com%2fannounce&amp;tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce&amp;tr=udp%3a%2f%2ffr33dom.h33t.com%3a3310%2fannounce&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/4mLIBsI.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Luccas Neto em: O Mapa do Tesouro 2 </span>
								<a href="magnet:?xt=urn:btih:5b9845921028af7425059601b2ee6e0efb198b29&amp;dn=Luccas%20Neto%20em%20-%20O%20Mapa%20do%20Tesouro%202%202021%20WEB-DL%201080p%20NACIONAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/jotnw6h.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Um Yakuza Genial: Tatsu Imortal 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:2b6d1001328dd026cb928ee24deb9fde94195356&amp;dn=Um%20Yakuza%20Genial%20-%20Tatsu%20Imortal%20S01%201080p%20WEB-DL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/xqYouLn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Incrível Hulk </span>
								<a href="magnet:?xt=urn:btih:9c69571713e214d5c749d4a18bcb6253a4b9ab40&amp;dn=O%20Incr%c3%advel%20Hulk%202008%20%20WWW.BLUDV.COM" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/y42JmBK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Homem de Ferro 3 </span>
								<a href="magnet:?xt=urn:btih:c5dd09712ac0f0b0e844cc191e97cd7a80bf4ab6&amp;dn=Homem%20de%20Ferro%203%202014%20WWW.BLUDV.COM" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/v75rfuQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Homem de Ferro 2 </span>
								<a href="magnet:?xt=urn:btih:2f7940e402727bb8a4969691e9d2c7c20a4a1cc1&amp;dn=Homem%20de%20Ferro%202%202010%20WWW.BLUDV.COM" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/ASm4Hkt.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Homem de Ferro </span>
								<a href="magnet:?xt=urn:btih:cf076b8a8d781dcf46c9b42990f3a6ee39a304ca&amp;dn=Homem%20de%20Ferro%202008%20WWW.BLUDV.COM" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/v3oAX7r.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Gintama: The Final 1080p Legendado (2021)</span>
								<a href="magnet:?xt=urn:btih:4b813971519f088db87e495af32f5a0b35fc1e64&amp;dn=Gintama%20The%20Final%20%5bWEB-DL%201080p%20AVC%20DD5.1%5d.mkv&amp;tr=http%3a%2f%2fnyaa.tracker.wf%3a7777%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/ooDhuFe.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Learning the Hard Way 2 </span>
								<a href="magnet:?xt=urn:btih:66b25ef69ed08df55cc449fe8c2d9f2d4b4eb4af&amp;dn=Learning.The.Hard.Way.2.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/s1ufZ0v.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Psycho Storm Chaser </span>
								<a href="magnet:?xt=urn:btih:18b3e433df0a8480548f75f1c430d5aa4d3a1303&amp;dn=Psycho.Storm.Chaser.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/OIKQOI6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lethal Love Letter </span>
								<a href="magnet:?xt=urn:btih:0ee7bc2ed2c2c869b80b642e514cab7e7f6d2e7e&amp;dn=Lethal.Love.Triangle.2021.1080p.HDTV.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/XIiJbiS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kin Dread </span>
								<a href="magnet:?xt=urn:btih:0fc93aee901f415eb619cac7f49f5db4e53f8de9&amp;dn=Kin.Dread.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/iRNqjA6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Return </span>
								<a href="magnet:?xt=urn:btih:90375b03d5586860fd40fcee31b16602846dd6de&amp;dn=The.Return.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/0b0TLoY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">John and the Hole </span>
								<a href="magnet:?xt=urn:btih:f1808130e3f4940c2534510e1b3dd140f80b1c66&amp;dn=John.and.the.Hole.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/T29Abn7.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Naked Singularity </span>
								<a href="magnet:?xt=urn:btih:94c7aae92ac16696ac4d6e096dba113e7f7d8ab9&amp;dn=Naked.Singularity.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/pBq7vrB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Joe Bell </span>
								<a href="magnet:?xt=urn:btih:aea1dc796e230738c00c4872d0071cc16e03875f&amp;dn=Joe.Bell.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/RvbVeFR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Habit </span>
								<a href="magnet:?xt=urn:btih:111bb0a0cf405e205e594c7efff3026fc1699cdb&amp;dn=Habit.2021.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/GvEGMSV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Buckley's Chance </span>
								<a href="magnet:?xt=urn:btih:d5246a2a44db77532ead3792c7bd5aa72be64262&amp;dn=Buckleys.Chance.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/fjORljC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Her Deadly Sugar Daddy </span>
								<a href="magnet:?xt=urn:btih:ebb5f5b488e2f2844f19c8b94b258e86a5da3efc&amp;dn=Her.Deadly.Sugar.Daddy.2020.720p.HDTV.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/8KXuFbV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Espião Inglês </span>
								<a href="magnet:?xt=urn:btih:da5525c8e031ab545f7052e4686ce33fd355af1f&amp;dn=O%20Espi%c3%a3o%20Ingl%c3%aas%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/L7o7bzS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Viajantes: Instinto e Desejo </span>
								<a href="magnet:?xt=urn:btih:453eeb75a008b246dddd13c2c07328ae2b57cf87&amp;dn=Viajantes%20-%20Instinto%20e%20Desejo%202021%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/SSSLJUu.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Wander </span>
								<a href="magnet:?xt=urn:btih:6630f0d41827f209c4f4bf7e0e6b4f34e4ee2a25&amp;dn=Wander%202020%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/q62pMiv.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">12 Mighty Orphans </span>
								<a href="magnet:?xt=urn:btih:01b8fcbce545dacebbf5617afecfbde0c6292c6b&amp;dn=12.Mighty.Orphans.2021.1080p.BluRay.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/WHqzJ7V.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ascensão do Cisne Negro </span>
								<a href="magnet:?xt=urn:btih:14ea062ba1458e7df8b8ee650f80c6241688e755&amp;dn=Ascensao%20do%20Cisne%20Negro%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/XSdAtTd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ele é Demais </span>
								<a href="magnet:?xt=urn:btih:516a054c84d020974fe17d9d6b24357a042cc2cf&amp;dn=Ele%20%c3%a9%20Demais%202021%201080p%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/g7Rw27P.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Amizade de Férias </span>
								<a href="magnet:?xt=urn:btih:5e2e9163a4c50034f26e753185dcbae36e16dc7d&amp;dn=Vacation+Friends+2021+720p+HULU+WEBRip+900MB+X264:+ShortRips&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&amp;tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&amp;tr=udp://tracker.internetwarriors.net:1337&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/tTRgHpk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Blood Conscious </span>
								<a href="magnet:?xt=urn:btih:EEEB90F205A75399D9A3FAF775781BC4C4401FDA&amp;dn=Blood.Conscious.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/mfsHByH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kuruthi </span>
								<a href="magnet:?xt=urn:btih:83916F7AA808125B146B1DC6C31A721D2241246F&amp;dn=Kuruthi.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/MpllXQF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">he Pit  </span>
								<a href="magnet:?xt=urn:btih:08FA5196218840B00811582BB7ABA962ECD31D72&amp;dn=The.Pit.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/YEEywUd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Survive </span>
								<a href="magnet:?xt=urn:btih:0B8713494A546EBCD8AAF71CBA5C5460ADFA9C76&amp;dn=Survive.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/7Wh0rMm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Shershaah </span>
								<a href="magnet:?xt=urn:btih:12D20C378A7D1CCC62943224B657958B0D5F1ADC&amp;dn=Shershaah.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/8URdiv0.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">She Ball </span>
								<a href="magnet:?xt=urn:btih:BAE8B5A896BDCBC958599F0F284CFA8FF0BF4740&amp;dn=She.Ball.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Z3wr2hA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rainfalls </span>
								<a href="magnet:?xt=urn:btih:4BA2CC194D0545FB0A94BD93B71DDF195AC4F245&amp;dn=Rainfalls.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/ByDkukf.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Eye Without a Face </span>
								<a href="magnet:?xt=urn:btih:6CC4EE92257FC263FFE61D570384F9797A597DF0&amp;dn=Eye.Without.a.Face.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/Y4A3ETV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Crime Story </span>
								<a href="magnet:?xt=urn:btih:77AFE654E8464BF5AF5B911827548C2933A809AD&amp;dn=Crime.Story.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/aVRcwfx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Loud House: O Filme </span>
								<a href="magnet:?xt=urn:btih:3fc20252cec0f45635a79bda6e606e510d042ed5&amp;dn=The%20Loud%20House%20O%20Filme%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ga8r9Ow.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Collection </span>
								<a href="magnet:?xt=urn:btih:A20C763D21574FF9A2AEEFDBDAD8A8FA8CEDAF6C&amp;dn=Collection.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/fGRmrZm.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">s Espiãs de Churchill </span>
								<a href="magnet:?xt=urn:btih:96b66ac01465f94d82da773dc073d71930fb2645&amp;dn=A.Call.to.Spy.2019.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/g3IJkVG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Raízes Macabras </span>
								<a href="magnet:?xt=urn:btih:7c7140a1d47232e000a166d07ab1f72f71b820d3&amp;dn=Ra%c3%adzes%20Macabras%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/0bVIYfD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Homem</span>
								<a href="magnet:?xt=urn:btih:1132c2966c9b92ae17f69d6c9f043b05cdb15147&amp;dn=TRILOGIA.Homem-Aranha.720p-RICKSZ&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&amp;tr=udp%3a%2f%2f9.rarbg.me%3a2830&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2960&amp;tr=udp%3a%2f%2f9.rarbg.to%3a2740%2fannounce&amp;tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&amp;tr=http%3a%2f%2fglotorrents.pw%3a80%2fannounce&amp;tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.piratepublic.com%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/vJSDa5L.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">apitã Marvel  </span>
								<a href="magnet:?xt=urn:btih:98ad12a684aef6af5b8cfec1b93d4f35beaff35a&amp;dn=%7bWWW.BLUDV.TV%7d%20Capit%c3%a3%20Marvel%202019%20(720p)%20Acesse%20o%20ORIGINAL%20WWW.BLUDV.TV" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/RqGoW0r.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Anna Karenina </span>
								<a href="magnet:?xt=urn:btih:a13600c9b7d5d4ae458559da943e5ed333a98ca3&amp;dn=Anna.Karenina.2012.BluRay.1080p.x264.DUAL.5.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/maKOUgC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Untold: Caitlyn Jenner </span>
								<a href="magnet:?xt=urn:btih:b8953235aa8c12f8c8f44bee1a6de3d2ec7c7aa5&amp;dn=Untold.Caitlyn.Jenner.2021.1080p.NF.WEBRip.DDP5.1.x264-KHN&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2750&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2980&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12730&amp;tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15720" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/s3jxz4N.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Capitão América: Guerra Civil </span>
								<a href="magnet:?xt=urn:btih:5f4ff72f6e6e4c41aed114991f3a88bcfc2d8ecb&amp;dn=Capit%c3%a3o%20Am%c3%a9rica%20-%20Guerra%20Civil%20720p%20(2016)%20Dual%20%c3%81udio%20BluRay%205.1%20--%20By%20-%20Lucas%20Firmo" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/DWe7S4A.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Cabeleireira </span>
								<a href="magnet:?xt=urn:btih:24560BB1D57A2EE68DFAF38CEEA06C4C278A30F6&amp;dn=The.Stylist.2020.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/eev83To.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Quarto de Vidro </span>
								<a href="magnet:?xt=urn:btih:055940BC7DF868BDFE2B14D95971FCA27C2EC4AC&amp;dn=The.Affair.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/QBAQOEG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Capitão América 2: O Soldado Invernal </span>
								<a href="magnet:?xt=urn:btih:5971ea344e64e6b3a7a96910adbb189a8f50d906&amp;dn=Capit%c3%a3o.Am%c3%a9rica.2.O.Soldado.Invernal.2014.720p.Dual-WOLVERDONFILMES.COM&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80&amp;tr=udp%3a%2f%2ftracker.istole.it%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.ccc.de%3a80&amp;tr=udp%3a%2f%2fopen.demonii.com%3a1337%22&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/N5jYZ6P.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Capitão América: O Primeiro Vingador </span>
								<a href="None : not found magnet." target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/nHUuKrQ.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Jumbo </span>
								<a href="magnet:?xt=urn:btih:D92B140ACF7E4AA6F1D85647E9D2B4AF25FEDD97&amp;dn=Jumbo.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/yKruuK7.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Universo Marvel </span>
								<a href="localhost:8080/EM BREVE" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/FsjN9pg.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Claw </span>
								<a href="magnet:?xt=urn:btih:F965312E819EEF913E57DF87DAFE6BC1623A5D09&amp;dn=Claw.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/HlRZ4ak.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Amigas de Sorte </span>
								<a href="magnet:?xt=urn:btih:e708db231b97c7dd58b0e614165e7e945f2c896b&amp;dn=Amigas%20de%20Sorte%202021%20WEB-DL%201080p%20NACIONAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/DmzOuFf.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Escape from Mogadishu </span>
								<a href="magnet:?xt=urn:btih:744E0ABDC14AFB2F07FC291FA736CE3BDEE6FFFC&amp;dn=Escape.from.Mogadishu.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/WJfHg5P.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Five Rules of Success </span>
								<a href="magnet:?xt=urn:btih:9EEC325519FBE7C8B7BC51C83783C504542045F1&amp;dn=The.Five.Rules.of.Success.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/EAINIZy.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">OSS 117: From Africa with Love </span>
								<a href="magnet:?xt=urn:btih:236cee72eac036bfe975e638f6aa8031a21c7d0b&amp;dn=OSS.117.From.Africa.with.Love.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/wMeozVA.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Stillwater </span>
								<a href="magnet:?xt=urn:btih:0357EE226F6ECE90C6FA6DC272FF421AD3616F73&amp;dn=Stillwater.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/54ZQfai.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mount Adams </span>
								<a href="magnet:?xt=urn:btih:7E8DB708FF60448A77D896EA90DC6C063AC7064F&amp;dn=Mount.Adams.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/qWJNlhD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Playing God </span>
								<a href="magnet:?xt=urn:btih:E2837AB26417BF18B7A001A16BFB960704110098&amp;dn=Playing.God.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/Mpmw8hq.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Savage Nature </span>
								<a href="magnet:?xt=urn:btih:dd6c52339a7298a80c8451d742fea6ed4749748d&amp;dn=A.Savage.Nature.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/IHFvl9B.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">otorious Nick  </span>
								<a href="magnet:?xt=urn:btih:E8F291ED47D9C3CF61395CEAA77148CCBB8781A8&amp;dn=Notorious.Nick.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/FODQ4sR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Undergods </span>
								<a href="magnet:?xt=urn:btih:9E6F9805938DAD57DD7240484A9B2F789E8C60E7&amp;dn=Undergods.2021.720p.WEBRip.800MB.x264-GalaxyRG+%E2%AD%90&amp;tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Gk3oh7B.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Witcher: Lenda do Lobo </span>
								<a href="magnet:?xt=urn:btih:8b983e92283af5f2ba0252f88731b800eb97740e&amp;dn=The%20Witcher%20Lenda%20do%20Lobo%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/3CwQQ1S.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Grimy </span>
								<a href="magnet:?xt=urn:btih:07BE0F1663430C326387D5AED7435DD23B21667A&amp;dn=Grimy.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/WTf6Zxt.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Boy Behind the Door </span>
								<a href="magnet:?xt=urn:btih:05516bddd9de69570fe82b52b76cdc0b982697af&amp;dn=The.Boy.Behind.the.Door.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/qamIGyC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Money Fight </span>
								<a href="magnet:?xt=urn:btih:889da40f3c50f353485c8af734b1c9c5e5658398&amp;dn=Money.Fight.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/PeULdFE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Justiça em Família </span>
								<a href="magnet:?xt=urn:btih:3fb88221d1aff777e3363b3b964f61ca4103379f&amp;dn=Justi%c3%a7a%20em%20Fam%c3%adlia%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/9pCJL4P.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pantera Negra: O Reino Selvagem </span>
								<a href="magnet:?xt=urn:btih:855e9c3f8d7d12badb03fcf8a24182d28c323e3c&amp;dn=Pantera.Negra.O.Reino.Selvagem.2020.1080p.DUBLADO.5.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/zl7lEkd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Lenda do Cavaleiro Verde </span>
								<a href="magnet:?xt=urn:btih:73ecd3d4f67b3b03c6ef6d3e8dc435ac73fa8171&amp;dn=The.Green.Knight.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/G242vGk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Reféns </span>
								<a href="magnet:?xt=urn:btih:C4E31B3E368968154B0E8A1FC30E3B7A5D88164E&amp;dn=Hosts.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/k8GTCX1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Ilha de Segredos </span>
								<a href="magnet:?xt=urn:btih:ad551a49acdea15e6d1965bea44fc4c9bbbb9ce7&amp;dn=Ilha%20de%20Segredos%202021%201080p%20WEB-DL%20DUBLADO%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/j6HmNNO.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Clearing </span>
								<a href="magnet:?xt=urn:btih:F87F2D3C3EB72F842C09A6F9A73A9EBB253F8BCF&amp;dn=The.Clearing.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/WTuDvZ4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Diários de Intercâmbio </span>
								<a href="magnet:?xt=urn:btih:eca580f5f41019f4c5377e2a8c52aa214cea0fd3&amp;dn=The.Secret.Diary.of.an.Exchange.Student.2021.PORTUGUESE.1080p.WEBRip.x264-VXT&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2980&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2890&amp;tr=udp%3A%2F%2Ftracker.fatkhoala.org%3A13790&amp;tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12750" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/z6I7UMF.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Untold: Pacto com o Diabo </span>
								<a href="magnet:?xt=urn:btih:275ad9c050cad9f7793ae3e10c0fa47112308278&amp;dn=Untold_%20Pacto%20com%20o%20Diabo%202021%20720p%20WEB-DL%20DUBLADO%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/UBfaZSB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Quam </span>
								<a href="magnet:?xt=urn:btih:4e734ef85226336b71f2142f1767ab39312fbff3&amp;dn=Quam%20-%20O%20Novo%20Milion%c3%a1rio%201080p%20WEB-DL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/zxU9gmT.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Wife of a Spy </span>
								<a href="magnet:?xt=urn:btih:F861B8C5EEB7FC5EC7F4D010802A538A6D388412&amp;dn=Wife.of.a.Spy.2020.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/mGbKmlG.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Violence Voyager </span>
								<a href="magnet:?xt=urn:btih:0AD0A39FE02C23AD5BBA305E3E6276DAFD377E40&amp;dn=Violence.Voyager.2018.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/KNABB3w.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Silent Forest </span>
								<a href="magnet:?xt=urn:btih:6FEFC588917780C506EBFE1682D75F1FD950EC83&amp;dn=The.Silent.Forest.2020.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/TdyIk1Y.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Às Coisas Que Nos Fazem Felizes </span>
								<a href="magnet:?xt=urn:btih:79115F6596B8F34438C728A709E5E5ED4ACE70A5&amp;dn=The.Best.Years.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/g66bJHO.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">State Funeral </span>
								<a href="magnet:?xt=urn:btih:4D83368C099051208FDBC97952267B636B071BF9&amp;dn=State.Funeral.2019.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/KgHoR0A.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Servants </span>
								<a href="magnet:?xt=urn:btih:58D8958C5E7E0E8321C0E85F2ED83A21DC5C5516&amp;dn=Servants.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Hds1Vgr.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Lábios Selados </span>
								<a href="magnet:?xt=urn:btih:C7C392B7BD058E5C8DF25460204CA8F7032852BF&amp;dn=Sealed.Lips.2018.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/81dk7oI.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Minha Irmã </span>
								<a href="magnet:?xt=urn:btih:63701F8B94C43328DBCB1957CEF8315E4085B978&amp;dn=Schwesterlein.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/FCxQPQE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Room 9 </span>
								<a href="magnet:?xt=urn:btih:ec790a2d89813b479ed4164c69925e3ce7485e8e&amp;dn=Room.9.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/8dnOhAy.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kandisha </span>
								<a href="magnet:?xt=urn:btih:73971d30794be81d32375502530e7695736f7141&amp;dn=Kandisha.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/zNx9bXp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Pedro Coelho 2: O Fugitivo </span>
								<a href="magnet:?xt=urn:btih:39f00e9023c88983fec93037d566dc68a3cee5c7&amp;dn=Pedro%20Coelho%202%20%e2%80%93%20O%20Fugitivo%202021%201080p%20BluRay%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/MglGivO.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Queen Bees </span>
								<a href="magnet:?xt=urn:btih:CBB4FE727630B649299F92FDF5CEBD34DBBE5DEB&amp;dn=Queen.Bees.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/2iHj4Yd.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Os Sonâmbulos </span>
								<a href="magnet:?xt=urn:btih:7A02F5E0E06E0330E5A9ACDA24A769E766C87A49&amp;dn=Los.son%c3%a1mbulos.2019.720p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/HrkVByi.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Inocência Roubada </span>
								<a href="magnet:?xt=urn:btih:7D32FAC2E9116733D4EAFCD187D6E083ADAF1822&amp;dn=Little.Tickles.2018.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/xjXPEEY.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Limbo </span>
								<a href="magnet:?xt=urn:btih:B720DA73F84BCA81E807844CA3AF62E7CDA7B54D&amp;dn=Limbo.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/3i50J2j.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Vida Solitária de Antonio Ligabue </span>
								<a href="magnet:?xt=urn:btih:742CC16EC74376732561ED187AEFC4C91FD492DE&amp;dn=Hidden.Away.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/JpVCYPR.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Mundo de Gloria </span>
								<a href="magnet:?xt=urn:btih:4412C1A71C1F402657D02E1F441EDD251EE7D1ED&amp;dn=Gloria.Mundi.2019.1080p.BluRay.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/qmZf0QT.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dead Horse Nebula </span>
								<a href="magnet:?xt=urn:btih:16F9991F4B205263D1FE373206479EB7F6D2018E&amp;dn=Dead.Horse.Nebula.2018.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/xUIi7vK.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Dara de Jasenovac </span>
								<a href="magnet:?xt=urn:btih:7AD02177A6E7CA8C30F38DE5D4B81D93B41619C2&amp;dn=Dara.of.Jasenovac.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/JAk0PYf.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Till Death </span>
								<a href="magnet:?xt=urn:btih:BAB1C84E6996551331D09B37BBF52BED99D1D2D1&amp;dn=Till.Death.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/J5Ah1Lt.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Minhas Férias com Patrick </span>
								<a href="magnet:?xt=urn:btih:9B92782D860826A5AC0EC5ECA9F20BA40A654018&amp;dn=Antoinette.dans.les.C%c3%a9vennes.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/pEhfz5H.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Josep </span>
								<a href="magnet:?xt=urn:btih:4B6AC8B1A2DD1F032B440717A1AAFDA163EC8F8D&amp;dn=Josep.2020.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/YCYHjLp.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Censor </span>
								<a href="magnet:?xt=urn:btih:A841C342D231C5A14359498869F8940251EB6BE4&amp;dn=Censor.2021.1080p.WEBRip.Legendado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/SG85dBw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Vilões </span>
								<a href="magnet:?xt=urn:btih:ec2c322bf3975c38501b507b7b5842e04be7b4f4&amp;dn=Vil%c3%b5es%202019%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/kvvpaGa.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Doutor Gama </span>
								<a href="magnet:?xt=urn:btih:c6720a8cc428752887f41d621752705444956d94&amp;dn=Doutor%20Gama%202021%20WEB-DL%201080p%20NACIONAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/yTargrD.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">O Nó do Diabo </span>
								<a href="magnet:?xt=urn:btih:f4dddca23146053a2ab7909b374bd98336469021&amp;dn=The.Devils.Knot.2018.PORTUGUESE.1080p.WEBRip.x264-VXT&amp;tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.me%3A2830&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2860&amp;tr=udp%3A%2F%2Ftracker.fatkhoala.org%3A13800&amp;tr=udp%3A%2F%2Ftracker.slowcheetah.org%3A14790" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/lzcPtz2.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Vem Brincar </span>
								<a href="magnet:?xt=urn:btih:efd8d95dd58634c763aa6df9bd6b3e840f9ea005&amp;dn=Vem%20Brincar%202020%20BluRay%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/HLhE1yS.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Intuit </span>
								<a href="magnet:?xt=urn:btih:abff9f31ceae5f75ad0a29b6f0eaf963db76dcc0&amp;dn=Intuit.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/YnMmSuw.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Honor Among Thieves </span>
								<a href="magnet:?xt=urn:btih:3d82d7335102b225e68cc4259c5094b0befdd7a5&amp;dn=Honor.Among.Thieves.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/KvaJk8A.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Mondo Hollywoodland </span>
								<a href="magnet:?xt=urn:btih:29ad64d39e5f4236f251c61fcca1c21ff0a465b0&amp;dn=Mondo.Hollywoodland.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/KiZoCGE.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Zone Drifter </span>
								<a href="magnet:?xt=urn:btih:f804d587ca0c9beafd7c771c096af0a072c71052&amp;dn=Zone.Drifter.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/TvqtCoV.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Last Victims </span>
								<a href="magnet:?xt=urn:btih:f0e2bca6fd0c92c064ce4db8e1c24a8c74bbe7e4&amp;dn=The.Last.Victims.2019.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/DfdAS0h.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Stray Dogs </span>
								<a href="magnet:?xt=urn:btih:d4d54c204ef8e7baae75cbbbf6e90357356e12a9&amp;dn=Stray.Dogs.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/H8v3NR6.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Friend Request </span>
								<a href="magnet:?xt=urn:btih:8c12891e58409f4ecb187f6089334b593f047746&amp;dn=Friend.Request.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/HpQOp9x.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Death Alley </span>
								<a href="magnet:?xt=urn:btih:ef07c4e2f475259aecbb118c55d9584af7ea1019&amp;dn=Death.Alley.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/cayTkrx.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Righteous Blood </span>
								<a href="magnet:?xt=urn:btih:9ec60f5f35f0631465cad1f6fb8dc7f18ebf4d03&amp;dn=Righteous.Blood.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/epFI6US.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Casting Couch Slaughter </span>
								<a href="magnet:?xt=urn:btih:836a75993d97dc5f950cc1919e86995c0f96a387&amp;dn=Casting.Couch.Slaughter.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/NjGMRBC.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Next</span>
								<a href="magnet:?xt=urn:btih:2ea65d3bf3ba73f4be56543c9de40ffc6df8eac2&amp;dn=Next-Door.Nightmare.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/OUKybRg.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Benedetta </span>
								<a href="magnet:?xt=urn:btih:281f4d895b81fb80646c7c454298a9751a122077&amp;dn=Benedetta.2021.720p.CAMRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/co7l2lB.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Blood Born </span>
								<a href="magnet:?xt=urn:btih:650a151997ecaa22bc0c49110acd53d889c72a94&amp;dn=Blood.Born.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/U87a8K5.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Dark Foe </span>
								<a href="magnet:?xt=urn:btih:a092c6013ea186d5f64ec98d92784d209a3dbc4b&amp;dn=A.Dark.Foe.2020.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/vKs0J3g.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">How It Ends </span>
								<a href="magnet:?xt=urn:btih:cafbc7e010c6092e6928ab43f64c5b5ffc9f00ef&amp;dn=How.It.Ends.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/jbHJ5h8.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">After the Flames: An Apocalypse Anthology </span>
								<a href="magnet:?xt=urn:btih:0912c7a429689c4bfe62e8e9469f4e28bb8c18e7&amp;dn=After.The.Flames.-.An.Apocalypse.Anthology.2020.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/tc0mFbj.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Rattle</span>
								<a href="magnet:?xt=urn:btih:219c011ddda50a2847a9bc9059fe2512d779994b&amp;dn=Rattle-Can.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/6OegxEX.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Robot Apocalypse </span>
								<a href="magnet:?xt=urn:btih:aad2d4c7f8db6210904560833d61c41aa9f858ec&amp;dn=Robotapocalypse.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/HtjnT8d.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">The Green Knight </span>
								<a href="magnet:?xt=urn:btih:0199ab58056f990e33e57c5eb0a642c7725df98b&amp;dn=The.Green.Knight.2021.720p.WEBRip.AAC2.0.X.264-EVO&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337&amp;tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/G242vGk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Os Renegados </span>
								<a href="magnet:?xt=urn:btih:6dad77b1dbc5ccc73eb92138facb04a0e21327c4&amp;dn=Os%20Renegados%202021%20BluRay%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/QM7F7sn.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Belgravia 1ª Temporada </span>
								<a href="magnet:?xt=urn:btih:2a89b69eb8f7fa1be350d7fc23307881096c4d01&amp;dn=Belgravia.S01.720p.WEBRip.DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/QQwp5u4.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Valeria 2ª Temporada </span>
								<a href="magnet:?xt=urn:btih:b6bdc60846a6b4afc79dc62cdc36d197143e3cab&amp;dn=Val%c3%a9ria_S02.720p.WEB-DL_DUBLADO.5.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/FK1BO9M.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Kimetsu no Yaiba Movie: Mugen Ressha</span>
								<a href="magnet:?xt=urn:btih:21583216511e119f768af82b97c7658f28c344f9&amp;dn=%5bFunimation%5d%20Demon%20Slayer%20-%20Kimetsu%20no%20Yaiba%20The%20Movie%20-%20Mugen%20Train%20%5bMulti-Dub%5d%5bMulti-Sub%5d%5b1080p%5d.mkv&amp;tr=http%3a%2f%2fnyaa.tracker.wf%3a7777%2fannounce&amp;tr=http%3a%2f%2fanidex.moe%3a6969%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a1337%2fannounce&amp;tr=http%3a%2f%2fglotorrents.pw%3a80%2fannounce&amp;tr=http%3a%2f%2ftracker.acgnx.se%2fannounce&amp;tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&amp;tr=udp%3a%2f%2fp4p.arenabg.ch%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/I93P8Q1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Beckett </span>
								<a href="magnet:?xt=urn:btih:6719d5d3305b180680a68210b8586aa916f47c3a&amp;dn=Beckett%202021%201080p%20WEBRip%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/ZmZHu5a.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">No Ritmo do Coração </span>
								<a href="magnet:?xt=urn:btih:f265f4bbcd78bfba48de723eee16459eac479e23&amp;dn=No%20Ritmo%20do%20Cora%c3%a7%c3%a3o%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/mVrkcnL.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Teen Titans Go! See Space Jam </span>
								<a href="magnet:?xt=urn:btih:c27dd302795bc5567467b5814ac303056a18b450&amp;dn=Teen%20Titans%20Go%20See%20Space%20Jam%202021%201080p%20WEBRip%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/T9oBCpb.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Monster Hunter: Legends of the Guild </span>
								<a href="magnet:?xt=urn:btih:26a61da75a7c2080284d02f43f25f72e7304b170&amp;dn=Monster%20Hunter%20-%20Legends%20of%20the%20Guild%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/qhxb94x.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Cidadão Kane </span>
								<a href="magnet:?xt=urn:btih:2f1688fdab2af2a82e018570580f8d4bab3656c8&amp;dn=Cidad%c3%a3o%20Kane%201941%20BluRay%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/n8tqK8L.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Locke </span>
								<a href="magnet:?xt=urn:btih:de5cf0c3205bb0a134815f0e592dd2486d412d80&amp;dn=Locke%202014%20BluRay%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/HigttXW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Vixen </span>
								<a href="magnet:?xt=urn:btih:beaf722338571a5755cf4f0edcb547c6b1f25e7e&amp;dn=Vixen%20-%20O%20Filme%202017%20WEB-DL%201080p%20DUAL%202.0&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/yVoxZ6n.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Legado de Mentiras </span>
								<a href="magnet:?xt=urn:btih:65283C950DE9F7C9127C7B03F32D7973319E1024&amp;dn=Legado%20de%20Mentiras%202020%20BluRay%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/I72vAys.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Infinito </span>
								<a href="magnet:?xt=urn:btih:85FAFC1877DAD5A1FF5C675BB9A5768D3AC04A7B&amp;dn=Infinito%202021%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/MqiLZio.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Sobreviva ou Morra Tentando </span>
								<a href="magnet:?xt=urn:btih:B2BB14D6A250EE4880DE9BA0EDBC2923A68CA4C1&amp;dn=Sobreviva%20ou%20Morra%20Tentando%202020%20WEB-DL%201080p%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/Gvnz9e0.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Explota Explota </span>
								<a href="magnet:?xt=urn:btih:99970D60157624FDBECCAFB48886176BAD6C04DE&amp;dn=Explota%20Explota%202021%20BluRay%201080p%20DUAL&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/yljmUeW.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Barraca do Beijo 3 </span>
								<a href="magnet:?xt=urn:btih:76E5B34C069BB8353786BAFDA3E25E124A4228A6&amp;dn=A%20Barraca%20do%20Beijo%203%202021%201080p%20WEB-DL%20DUAL%205.1&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce" target="_blank"><img class="grayscale" src="https://i2.wp.com/i.imgur.com/zwsUzuH.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">A Casa das Flores: O Filme </span>
								<a href="magnet:?xt=urn:btih:ECF8140C5CAF035B29EEC52BD030C56551030E00&amp;dn=The.House.Of.Flowers.The.Movie.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/eFknsg1.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Desce? </span>
								<a href="magnet:?xt=urn:btih:a2945176f6d1ffe92bb2ee670fcf501a37876917&amp;dn=Desce%202018%201080p%20FULL%20WEB-DL%20DUAL&amp;tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&amp;tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&amp;tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&amp;tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&amp;tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&amp;tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&amp;tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=udp%3a%2f%2f3rt.tace.ru%3a60889%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/SDCs1ko.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Wildcat </span>
								<a href="magnet:?xt=urn:btih:00D5F229532C4A9885065B24F0F18129EF1FD83A&amp;dn=Wildcat.2021.1080p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i1.wp.com/i.imgur.com/mzUkyCk.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
						<div class="item">
							<div class="tooltip">
								<span class="tooltiptext">Together </span>
								<a href="magnet:?xt=urn:btih:4AA190F84E9B2184FA27F3B0CD7CCDA24E4AE4F3&amp;dn=Together.2021.720p.WEBRip.Dublado.mkv&amp;tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&amp;tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&amp;tr=http%3a%2f%2ftrax.corbina.net%3a6969%2fannounce" target="_blank"><img class="grayscale" src="https://i0.wp.com/i.imgur.com/bmqXH2E.jpg?resize=220%2C310&ssl=1" alt="gallery"></a>
							</div>
						</div>
					</div>
				</div>
			</section>
        `;

        return html;
    }
}

